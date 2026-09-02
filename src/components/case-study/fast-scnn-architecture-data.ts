// Architecture data derived directly from fast_scnn.py and verified by manual
// trace of the forward() pass. Input resolution matches the 512x1024 resize
// used in train.py / loaders_test.py. Parameter counts computed from
// PyTorch's documented Conv2d/BatchNorm2d parameter formulas — not measured
// at runtime, but arithmetically exact given the layer definitions in the code.

export interface ArchStage {
  id: string;
  group: 'downsample' | 'global' | 'fusion' | 'classifier';
  groupLabel: string;
  label: string;
  layerType: string;
  inChannels: number;
  outChannels: number;
  height: number;
  width: number;
  params: number;
  note?: string;
  frozen?: boolean;
}

export const archStages: ArchStage[] = [
  {
    id: 'input',
    group: 'downsample',
    groupLabel: 'Input',
    label: 'RGB image',
    layerType: 'Input tensor',
    inChannels: 3,
    outChannels: 3,
    height: 512,
    width: 1024,
    params: 0,
  },
  {
    id: 'ds-1',
    group: 'downsample',
    groupLabel: 'Learning to Downsample',
    label: 'ConvBNReLU',
    layerType: 'Standard 3×3 conv, stride 2',
    inChannels: 3,
    outChannels: 32,
    height: 256,
    width: 512,
    params: 928,
  },
  {
    id: 'ds-2',
    group: 'downsample',
    groupLabel: 'Learning to Downsample',
    label: 'DSConv 32→48',
    layerType: 'Depthwise separable conv, stride 2',
    inChannels: 32,
    outChannels: 48,
    height: 128,
    width: 256,
    params: 1984,
  },
  {
    id: 'ds-3',
    group: 'downsample',
    groupLabel: 'Learning to Downsample',
    label: 'DSConv 48→64',
    layerType: 'Depthwise separable conv, stride 2',
    inChannels: 48,
    outChannels: 64,
    height: 64,
    width: 128,
    params: 3728,
  },
  {
    id: 'gf-1',
    group: 'global',
    groupLabel: 'Global Feature Extractor',
    label: 'block1',
    layerType: 'Depthwise separable conv, stride 2',
    inChannels: 64,
    outChannels: 64,
    height: 32,
    width: 64,
    params: 4928,
  },
  {
    id: 'gf-2',
    group: 'global',
    groupLabel: 'Global Feature Extractor',
    label: 'block2',
    layerType: 'Depthwise separable conv, stride 2',
    inChannels: 64,
    outChannels: 96,
    height: 16,
    width: 32,
    params: 7040,
  },
  {
    id: 'gf-3',
    group: 'global',
    groupLabel: 'Global Feature Extractor',
    label: 'block3 (feat)',
    layerType: 'Depthwise separable conv, stride 1',
    inChannels: 96,
    outChannels: 128,
    height: 16,
    width: 32,
    params: 13600,
  },
  {
    id: 'gf-ppm',
    group: 'global',
    groupLabel: 'Global Feature Extractor',
    label: 'PPM branch',
    layerType: 'AdaptiveAvgPool(1) → 1×1 conv → upsample',
    inChannels: 128,
    outChannels: 128,
    height: 16,
    width: 32,
    params: 16640,
    frozen: true,
    note: 'Wrapped in .eval() + torch.no_grad() inside forward(). Receives no gradient — its weights stay at random initialization for the entire training run.',
  },
  {
    id: 'concat',
    group: 'global',
    groupLabel: 'Global Feature Extractor',
    label: 'concat(feat, ppm_out)',
    layerType: 'Channel-wise concatenation',
    inChannels: 256,
    outChannels: 256,
    height: 16,
    width: 32,
    params: 0,
  },
  {
    id: 'fusion',
    group: 'fusion',
    groupLabel: 'Feature Fusion',
    label: 'conv1x1 256→128',
    layerType: '1×1 conv + BatchNorm + ReLU',
    inChannels: 256,
    outChannels: 128,
    height: 16,
    width: 32,
    params: 33024,
    note: 'Fuses global features with the PPM branch — but does not receive a skip connection from the downsampling stage, unlike the original Fast-SCNN paper.',
  },
  {
    id: 'cls-1',
    group: 'classifier',
    groupLabel: 'Classifier',
    label: 'DSConv 128→128 ×2',
    layerType: 'Two depthwise separable convs, stride 1',
    inChannels: 128,
    outChannels: 128,
    height: 16,
    width: 32,
    params: 36096,
  },
  {
    id: 'cls-2',
    group: 'classifier',
    groupLabel: 'Classifier',
    label: 'conv1x1 128→19',
    layerType: '1×1 conv to class logits',
    inChannels: 128,
    outChannels: 19,
    height: 16,
    width: 32,
    params: 2451,
  },
  {
    id: 'output',
    group: 'classifier',
    groupLabel: 'Output',
    label: 'Bilinear upsample',
    layerType: 'Upsample to input resolution',
    inChannels: 19,
    outChannels: 19,
    height: 512,
    width: 1024,
    params: 0,
    note: 'Final per-pixel class prediction map, one channel per Cityscapes class.',
  },
];

export const TOTAL_PARAMS = archStages.reduce((sum, s) => sum + s.params, 0);
export const FROZEN_PARAMS = archStages
  .filter((s) => s.frozen)
  .reduce((sum, s) => sum + s.params, 0);
