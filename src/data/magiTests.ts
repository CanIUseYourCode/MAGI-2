export type TestNiche =
  | 'Fitness'
  | 'Plumbers'
  | 'Entrepreneurs'
  | 'Agency Owners'
  | 'Landscape Design';

export type TestMode =
  | 'Ref-to-Video'
  | 'Raw Text Retention'
  | '4-Photo Promo'
  | '1-Photo Img-to-Video';

export interface ReferencePhoto {
  id: string;
  label: string;
}

export interface MagiTestItem {
  code: string;
  batch: 1 | 2 | 3;
  title: string;
  sceneSummary: string;
  niche: TestNiche;
  mode: TestMode;
  modeDetail: string;
  influencer: string;
  influencerId: string;
  durationSec: number;
  actualDurationSec: number;
  costUsd: number;
  resolution: string;
  fileSizeMb: number;
  inferenceSec: number;
  endpoint: string;
  billingUuid: string;
  predictionId: string;
  folderId: string;
  outputVideoId: string;
  outputVideoLabel: string;
  muxedVideoId?: string;
  sourceVideoId?: string;
  sourceClipLabel?: string;
  audioRefId?: string;
  audioRefLabel?: string;
  referencePhotos: ReferencePhoto[];
  notes: string;
  prompt: string;
}

export const DRIVE_ROOT_FOLDER_URL =
  'https://drive.google.com/drive/folders/14WuqakL4SjL45yHkr-Ss0KqiLnqY605v?usp=sharing';

export function buildDriveVideoUrl(fileId: string): string {
  return `/api/media/${encodeURIComponent(fileId)}`;
}

export function buildDriveThumbUrl(fileId: string, width = 900): string {
  return `https://lh3.googleusercontent.com/d/${encodeURIComponent(fileId)}=w${width}`;
}

export function buildDriveViewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/view`;
}

export const MAGI_TESTS: MagiTestItem[] = [
  {
    code: '01',
    batch: 1,
    title: 'Incline Dumbbell Rows',
    sceneSummary: 'Chest-supported bench rows, smooth dismount, and bench adjustment in a strength gym.',
    niche: 'Fitness',
    mode: 'Ref-to-Video',
    modeDetail: 'Ref-to-Video',
    influencer: 'Jenna Matthews',
    influencerId: '#8419',
    durationSec: 10,
    actualDurationSec: 10.01,
    costUsd: 0.8,
    resolution: '1080×1920',
    fileSizeMb: 7.29,
    inferenceSec: 817.7,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: 'b0dd79cabda84e37b2721d737785b909',
    predictionId: '13632f27679e4108971f2e0cf9ff5447',
    folderId: '1tQt5iCqJCPr642818lOmX2B44RXo-job',
    outputVideoId: '10ibJBGCqeqzANbIX1ob2PWp_Y8ep5B_o',
    outputVideoLabel: 'Native Gym Foley',
    muxedVideoId: '1wWTaoLmiqvZ_9JdjexpI_xSZcdyHaW8b',
    sourceVideoId: '1UN1YrRE9OiJ0HO-1dAaw3QHDbIuUW5Kv',
    sourceClipLabel: 'Clip #4218 · 9.54s 720p',
    referencePhotos: [
      { id: '1Apuolh3OlaW2QnF2uGtwbthvkspSSXgy', label: 'Photo #5395' },
      { id: '1cK6e0GKbkhoBNWpa7YqE3IRtWpAvMzbF', label: 'Photo #5437' },
      { id: '1qIctWatyjpLXqh2ER6_eeeMfQwPHWfxn', label: 'Photo #5445' },
      { id: '1PTacduhuV9Eee7XVV2bHuKHNWhXTJpSp', label: 'Photo #5470' },
    ],
    notes:
      'MAGI-2 re-stages action timing slightly rather than locking frame-for-frame timestamps to the source clip, so native generated gym Foley matches the dumbbell set-down cleanly while muxed original reel audio drifts slightly from the new visual timing.',
    prompt:
      'Recreate Video 1 (@video_1) as a photorealistic 9:16 vertical live-action gym reel starring ONLY the female fitness coach shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4): a 27-year-old athletic woman with fair skin, bright features, and long sun-kissed blonde hair tied in a high ponytail, wearing a fitted charcoal athletic crop tank, black gym shorts, and white training sneakers. Replace the person in Video 1 completely with the woman from Images 1–4 while keeping her exact face, hair, and athletic build locked across every frame. Follow the exact physical movement sequence, pacing, and object interactions from Video 1: she starts face-down on an incline weight bench performing chest-supported two-arm dumbbell rows, sets the dumbbells down at the base, slides smoothly off the bench onto her knees, stands up briskly facing the camera with an authentic post-set smile, grips and adjusts the incline bench with both hands, and steps back into position over the bench inside a bright, modern strength gym. Keep dumbbells, incline bench proportions, hands, and full-body anatomy crisp and realistic. No extra people in the foreground, no captions, no text overlays, no watermarks. Audio: realistic gym room acoustics, subtle metallic dumbbell clink, vinyl and steel bench movement, and natural athletic breathing; no speech and no background music.',
  },
  {
    code: '02',
    batch: 1,
    title: 'Subfloor Drain & PVC Fitting',
    sceneSummary: 'Crouching on plywood subfloor adjusting floor drain grate and reaching for PVC fittings.',
    niche: 'Plumbers',
    mode: 'Ref-to-Video',
    modeDetail: 'Ref-to-Video',
    influencer: 'Paul DeLuca',
    influencerId: '#8416',
    durationSec: 10,
    actualDurationSec: 10.01,
    costUsd: 0.8,
    resolution: '1080×1920',
    fileSizeMb: 14.75,
    inferenceSec: 374.5,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: '2c6c9ef097de46ff90515a76e4141920',
    predictionId: 'ac36a8922d5547a5a29c67c35fad6e71',
    folderId: '11yahYsAV8PI8t2vCRI-4LWjWlcZu5sK2',
    outputVideoId: '1ihLQ4aK-BNSsI1c9BzZpQ7KD56upebZa',
    outputVideoLabel: 'Native Jobsite Foley',
    muxedVideoId: '1c3F3oR-0QNN7CmbihodL12PKYIfNc7La',
    sourceVideoId: '1sYK_0SkUza1LxABwxHq9rXTWYC8TiHmU',
    sourceClipLabel: 'Clip #3972 · 9.98s 720p',
    referencePhotos: [
      { id: '1KRdJYBGNNzbWdJ0pQBUwIjKKuowJQh4-', label: 'Photo #5514' },
      { id: '1G0-38Q4ka1xouq6Qn7HydRizwaS99pAa', label: 'Photo #5516' },
      { id: '1YSUl6ZPhuYheXH9e_h2ity5x1cggBcs5', label: 'Photo #5518' },
      { id: '1TGs8luynDCzwzqAyZmi1IFVYSQVadg2_', label: 'Photo #5527' },
    ],
    notes:
      'Strongest hands-on physical object realism of the Viral tests: Paul’s identity, salt-and-pepper beard, leather tool belt, floor drain grate contact, and white tubing pick-up remain crisp at native 1080p.',
    prompt:
      'Recreate Video 1 (@video_1) as a photorealistic 9:16 vertical live-action residential jobsite reel starring ONLY the master plumber shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4): a 46-year-old sturdy man with salt-and-pepper hair, a neatly trimmed salt-and-pepper beard, warm weathered features, wearing a charcoal work t-shirt, blue work jeans, brown leather tool belt loaded with hand tools, and leather work boots. Replace the plumber in Video 1 completely with the man from Images 1–4, locking his exact face, beard, build, and tool belt across every frame. Preserve the exact hands-on action sequence, timing, camera angle, and plumbing materials from Video 1: crouching on an unfinished plywood subfloor inside open wood-stud bathroom framing beside a vertical black ABS standpipe, he adjusts and seats a square floor drain grate with both hands, glances up naturally toward the camera, and reaches across the plywood floor to pick up the plastic bottle and white plumbing tubing and pipe fittings. Keep finger-to-tool and hand-to-pipe contact accurate and physically grounded. No captions, no text boxes, no logos, no watermarks. Audio: realistic residential construction room acoustics, subtle wood subfloor creak, PVC and metal floor-drain handling sounds, and light plastic pipe rustle; no speech and no music.',
  },
  {
    code: '03',
    batch: 1,
    title: 'Conference Table Desk Phone',
    sceneSummary: 'Founder lying on conference table twirling corded phone receiver with lip-synced voice.',
    niche: 'Entrepreneurs',
    mode: 'Ref-to-Video',
    modeDetail: 'Ref-to-Video + Voice Ref',
    influencer: 'Markus Chen',
    influencerId: '#8425',
    durationSec: 6,
    actualDurationSec: 6.0,
    costUsd: 0.48,
    resolution: '1080×1920',
    fileSizeMb: 5.14,
    inferenceSec: 663.4,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: 'd0151cb0a12d47bb8b2cb5a0cedd6b9e',
    predictionId: 'b40f1501c79745edb2f47816091d70ff',
    folderId: '1iSVeID0oiCzgYVBSOqpf3icGKIXmf-cE',
    outputVideoId: '1mWTVCBqM-uXuJfiYNtN1qnnzR03OHWBo',
    outputVideoLabel: 'Lip-Synced Speech',
    sourceVideoId: '15eT7WC59kx3QBNjBCDfLqL2v8vpC7ySx',
    sourceClipLabel: 'Clip #4336 · 5.34s 720p',
    audioRefId: '1H5nnQ21h2s5n8_Xse4-lJsuyCN_CCZ0r',
    audioRefLabel: 'Voice Track #4336.mp3',
    referencePhotos: [
      { id: '1v_q6weLLC6x1DsGjkH0D0TtKiERaAnBx', label: 'Photo #5590' },
      { id: '1KrWF8L7h4y1X8Cvkl-8c_i9M4Ei9Sfk-', label: 'Photo #5531' },
      { id: '1mn1pbwBp1dLMqPaMgSN58SfojHmdJ7Xo', label: 'Photo #5583' },
      { id: '1xVJqQzNFpq6sa5LGhoK6QW_SAHciLH-b', label: 'Photo #5578' },
    ],
    notes:
      'MAGI-2 uses @audio_1 as a voice timbre reference rather than passing raw source audio verbatim; the quoted line in the prompt drives 100% accurate lip-synced speech: "I just want the best for you, and I think that you deserve the world."',
    prompt:
      'Recreate Video 1 (@video_1) as a photorealistic 9:16 vertical live-action founder reel starring ONLY the young tech entrepreneur shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4): a 27-year-old slim East Asian man with clean-cut black hair and round wire-frame glasses, wearing a tailored dark charcoal blazer over a black crew-neck tee, dark tailored trousers, and clean leather loafers. Replace the person in Video 1 completely with the man from Images 1–4 while keeping his exact face, round glasses, hair, and proportions consistent in every frame. Follow the exact playful pose, camera framing, and corded desk-phone interaction from Video 1: lying on his stomach propped on his elbows atop a sleek executive conference room table with glass office walls and chairs around him, holding the corded black desk telephone receiver to his right ear while twirling the coiled cord with his left hand, kicking his feet playfully behind him, and looking toward the camera with a warm grin as he speaks. Match the warm, earnest male vocal delivery and pacing of Reference Audio 1 (@audio_1) as he clearly says with synchronized lip movement: "I just want the best for you, and I think that you deserve the world." No on-screen captions, no text overlays, no watermarks. Audio: clear close-mic natural male speech synchronized to his lips with quiet modern conference-room ambience and subtle phone-cord movement; no background music.',
  },
  {
    code: '04',
    batch: 1,
    title: 'Boutique Gym Spoken Pitch',
    sceneSummary: 'Prompt-staged from 4 outdoor photos into a sunlit boutique gym with spoken pitch.',
    niche: 'Fitness',
    mode: '4-Photo Promo',
    modeDetail: '4-Photo Ref-to-Video',
    influencer: 'Jenna Matthews',
    influencerId: '#8419',
    durationSec: 8,
    actualDurationSec: 8.01,
    costUsd: 0.64,
    resolution: '1080×1920',
    fileSizeMb: 8.84,
    inferenceSec: 660.0,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: '57d5d8efb35745cb8f6a13980ffe2116',
    predictionId: '456c5c99a259442b8173ff838a842b93',
    folderId: '1pnx9OWP4S-4Xr0wueG3imunKNy-mpTC1',
    outputVideoId: '1r5t2JfePobIi1978AWsa0g1LxgY79KvU',
    outputVideoLabel: 'Spoken Coaching Pitch',
    referencePhotos: [
      { id: '1PzXhXqhEbs-QmE6i_L2cT9R2SeAfpf2t', label: 'Photo #5395' },
      { id: '1sRmqL5pqe91DsJPjm_NrvqeVc2VgGDUx', label: 'Photo #5437' },
      { id: '1rdupgueAhqkyErSiUstHiEwMxM7sWIe8', label: 'Photo #5445' },
      { id: '1bci8BIZGtm_kt06dZAA_mUzOO-bQNMDg', label: 'Photo #5470' },
    ],
    notes:
      'Verified Whisper transcript (100% match): "Stop guessing your workouts every Monday. Give me 30 minutes, 3 days a week, and we will build real strength that lasts." Audio loudness averaged -25.4 dB (quieter than #06), so production pipelines should apply loudnorm.',
    prompt:
      'A photorealistic 9:16 vertical creator promotional video starring the female fitness coach from Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4), keeping her exact facial features, sun-kissed blonde ponytail, fair skin, and athletic build consistent throughout. Inside a sunlit San Diego boutique strength gym with racks of black hex dumbbells, dark rubber flooring, and warm morning window light, a handheld camera at eye level smoothly pushes in from medium-wide to medium close-up. Wearing a fitted charcoal athletic tank and black gym shorts, she sets a black hex dumbbell cleanly onto the rack with her right hand, turns squarely to the camera with warm, confident coach energy, gestures naturally with open hands, and speaks clearly in an upbeat, natural American female voice with crisp lip-sync: "Stop guessing your workouts every Monday. Give me thirty minutes three days a week, and we will build real strength that lasts." Natural skin texture, steady handheld micro-movement, zero captions or watermarks. Audio: clear natural female voice recorded on a wireless lav mic, a soft metallic clink as the dumbbell touches the rack at the start, and subtle sunlit gym room tone; no background music.',
  },
  {
    code: '05',
    batch: 1,
    title: 'Shutoff Valve Plumbing Tip',
    sceneSummary: 'Prompt-staged in a basement utility room tapping a brass ball shutoff valve with a wrench.',
    niche: 'Plumbers',
    mode: '4-Photo Promo',
    modeDetail: '4-Photo Ref-to-Video',
    influencer: 'Paul DeLuca',
    influencerId: '#8416',
    durationSec: 8,
    actualDurationSec: 8.01,
    costUsd: 0.64,
    resolution: '1080×1920',
    fileSizeMb: 8.62,
    inferenceSec: 660.0,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: 'f07e6b3a128448a9a81a4ad3854d9eb3',
    predictionId: '80d705f6cdb3476ea3692cdab4a9e74c',
    folderId: '1xWEdgRlf4c4WR3N6aXT_ooEGVeztc2LN',
    outputVideoId: '1nqNBZewn7Q-afjproOME9Sr7_obh7AV2',
    outputVideoLabel: 'Spoken Plumbing Tip',
    referencePhotos: [
      { id: '12IdJviDwFgVYVOGAVbBgBZZ4Ex167Iaq', label: 'Photo #5514' },
      { id: '1gAuEX_OVp2O0wDFw8Wqvme9p8gJt0v4c', label: 'Photo #5516' },
      { id: '1fjZ3ycCIJkNPmGFpsgearYVNQSKGK16L', label: 'Photo #5518' },
      { id: '1D9Yw0QTyyghoftXeopONi3K-duH2jWi5', label: 'Photo #5527' },
    ],
    notes:
      'Verified Whisper transcript (100% match): "Before a burst pipe floods your basement, test this main shutoff valve twice a year. If yours is stuck, call us before an emergency hits." Clean metallic wrench tap SFX and strong likeness from 4 photos.',
    prompt:
      'A photorealistic 9:16 vertical home-service promotional video starring the 46-year-old plumber from Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4), preserving his exact weathered friendly face, salt-and-pepper hair, trimmed salt-and-pepper beard, sturdy build, charcoal work shirt, and loaded brown leather tool belt. Staged inside a clean residential basement utility room beside a tall tank water heater and bright copper supply pipes with a brass ball shutoff valve, a natural handheld camera frames him at chest-up medium distance and gently tracks in. Holding a steel pipe wrench in his right hand, he taps the brass shutoff valve lever lightly to point it out, looks directly into the lens with trustworthy neighborhood-pro authority, and speaks clearly in a warm, grounded American male voice with accurate lip-sync: "Before a burst pipe floods your basement, test this main shutoff valve twice a year. If yours is stuck, call us before an emergency hits." Crisp hand and wrench detail, natural indoor lighting, no text overlays or logos. Audio: clear close-mic male voice, a subtle metallic tap on the brass valve at the beginning, and quiet residential utility-room ambience; no music.',
  },
  {
    code: '06',
    batch: 1,
    title: 'Plaza First-Frame Walk & Talk',
    sceneSummary: 'Starts directly from Photo #5590 with a speed-to-lead founder walk-and-talk pitch.',
    niche: 'Entrepreneurs',
    mode: '1-Photo Img-to-Video',
    modeDetail: '1-Photo Img-to-Video',
    influencer: 'Markus Chen',
    influencerId: '#8425',
    durationSec: 8,
    actualDurationSec: 8.01,
    costUsd: 0.64,
    resolution: '1080×1920',
    fileSizeMb: 11.56,
    inferenceSec: 647.3,
    endpoint: 'sand-ai/magi-2/image-to-video',
    billingUuid: '1ef24793cbb84a4d8b8640386cc7d802',
    predictionId: 'f44133f3eb464470bc76f5779ad07ca8',
    folderId: '1m7F_LDwCorDk-mX3s6uV63LpyRlHmRlR',
    outputVideoId: '1HcNe93MbQ44tAJFDgUPgpqSG5qP_JtJ6',
    outputVideoLabel: 'First-Frame Walk & Talk',
    referencePhotos: [
      { id: '1LuF-cl93wUVpDecxMP6DfqpC5VQEpn5E', label: 'First Frame #5590' },
    ],
    notes:
      'Loudest, cleanest broadcast-ready audio (-14.1 dB mean, -0.3 dB peak) and 100% exact pixel lock on frame 0 from Photo #5590: "Most agencies do not have a lead problem—they have a speed-to-lead problem. Automate the first two minutes, and watch your booked calls double."',
    prompt:
      'Starting smoothly from the first frame, the young tech founder in round wire-frame glasses takes his hands out of his pockets and steps casually forward along the modern glass-and-concrete office plaza as a handheld camera tracks smoothly with him into a medium chest-up framing. Looking directly into the camera lens with calm, sharp founder presence and natural conversational hand gestures, he speaks clearly in a crisp, natural young American male voice with accurate lip-sync: "Most agencies do not have a lead problem—they have a speed-to-lead problem. Automate the first two minutes, and watch your booked calls double." Subtle natural breeze in the background trees, realistic facial micro-expressions behind his glasses, steady handheld creator-reel feel, no text overlays or watermarks. Audio: clear close-mic male speech on a wireless clip mic with light outdoor city-plaza ambience; no background music.',
  },
  {
    code: '07',
    batch: 2,
    title: 'Desk Smartphone Reaction',
    sceneSummary: 'Scrolling smartphone at office desk, breaking into a candid smile and amused gasp.',
    niche: 'Agency Owners',
    mode: 'Ref-to-Video',
    modeDetail: 'Ref-to-Video',
    influencer: 'Clara Morales',
    influencerId: '#8429',
    durationSec: 9,
    actualDurationSec: 9.01,
    costUsd: 0.72,
    resolution: '1080×1920',
    fileSizeMb: 7.0,
    inferenceSec: 715.6,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: 'f145a6e542d04d619317fc5006f59ac9',
    predictionId: '42f4d9a62e99437c8915784f5d9e15b2',
    folderId: '1gTPpnEhqNjGA0xGvNrry8gpFvT_6iNYZ',
    outputVideoId: '1Rk-3JBv6gy5aMwmMywE6caMtU00AAcHz',
    outputVideoLabel: 'Native Office Foley',
    muxedVideoId: '1gTtZjGDxPFWIXVRtzi48t9qyseRUhQUr',
    sourceVideoId: '1T0duzVVMMoal4P_dRtCaMwRu7nxq7PZB',
    sourceClipLabel: 'Clip #4468 · 9.1s 720p',
    referencePhotos: [
      { id: '1N70Tux21KW0-pZneDVL7hmt2ldPdIpe3', label: 'Photo #5632' },
      { id: '12wPP6_kgUjFSA2EKOMTLwjCPFzoGsOF2', label: 'Photo #5636' },
      { id: '1aJXebnBVIoAn0HxZ4xwiG5UHfjj6h0jl', label: 'Photo #5640' },
      { id: '1ZL7LHYns17PHDpf7qI-FgQy3668hIr-M', label: 'Photo #5642' },
    ],
    notes:
      'Removed 100% of the 3-line baked-in center text overlay from source clip #4468 while preserving Clara’s exact dark wavy hair, facial structure, beige blazer, office monitor/keyboard/mouse setup, and expressive hand-to-mouth smartphone reaction.',
    prompt:
      'Recreate Video 1 (@video_1) as a photorealistic 9:16 vertical live-action agency office reel starring ONLY the female PR agency owner shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4): a 34-year-old woman with warm olive skin, expressive dark eyes, and shoulder-length dark wavy hair, wearing a tailored beige blazer over a crisp white tee. Replace the person in Video 1 completely with the woman from Images 1–4 while locking her exact facial structure, dark wavy hair, and natural proportions across every frame. Follow the exact physical pose, camera framing, and smartphone reaction sequence from Video 1: seated at a warm wooden office desk behind the edge of a black desktop monitor with a black keyboard and mouse in front of her, holding her smartphone with both hands as she scrolls, breaking into a bright candid smile, gasping in amused surprise and bringing one hand lightly to her mouth with wide eyes, then smiling down at her phone screen again. Keep hands, fingers on the phone, keyboard, and monitor crisp and realistic. No captions, no on-screen text overlays, no watermarks. Audio: quiet modern office room tone, subtle smartphone tap and desk movement, and a soft natural amused breath; no speech and no background music.',
  },
  {
    code: '08',
    batch: 2,
    title: 'Wistful Agency Desk Reflection',
    sceneSummary: 'Clicking wireless mouse at wooden desk, then pausing thoughtfully cheek-in-hand.',
    niche: 'Agency Owners',
    mode: 'Ref-to-Video',
    modeDetail: 'Ref-to-Video',
    influencer: 'Lucas Hartwell',
    influencerId: '#8433',
    durationSec: 8,
    actualDurationSec: 8.01,
    costUsd: 0.64,
    resolution: '1080×1920',
    fileSizeMb: 6.3,
    inferenceSec: 674.5,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: '145b4a7987d149b2801909b40e138f5c',
    predictionId: '64f1967357e6443799ee3a36ac559c5c',
    folderId: '121gwXP4QC9Im-CwP2mz_raKH4gSRT2_f',
    outputVideoId: '19bv3-iTNaAAkwlUnwJRHVFWB86XCgGhI',
    outputVideoLabel: 'Native Office Foley',
    muxedVideoId: '1ZQ1BdJyCnIhERksbO-7DeHt6hQpRa_8O',
    sourceVideoId: '12YMr1h0GBTfDVFPIIcRsbcuss9WUdiSU',
    sourceClipLabel: 'Clip #4434 · 8.0s 720p',
    referencePhotos: [
      { id: '1vQm6Qm4swz4MinK2dbkPocM--NAj0oc3', label: 'Photo #5716' },
      { id: '1hppfVLbq7GFFeOpbk4tQWdrL5aLQz8Em', label: 'Photo #5720' },
      { id: '11VgINI91CNEjQYHUnD4jgX6LxBD3yyXA', label: 'Photo #5722' },
      { id: '1CpDEiWmjkOdej9ED8rYb8O2qAjxXWzuP', label: 'Photo #5725' },
    ],
    notes:
      'Cleanly stripped all baked-in caption & emoji text from source clip #4434 while locking Lucas’s exact clean-shaven facial structure, dark hair, heather-grey crew sweater, mouse click, and wistful cheek-in-hand expression.',
    prompt:
      'Recreate Video 1 (@video_1) as a photorealistic 9:16 vertical live-action creative agency office reel starring ONLY the male agency founder shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4): a 36-year-old clean-shaven man with short dark brown hair, strong jawline, and warm eyes, wearing a light heather-grey long-sleeve crew sweater. Replace the man in Video 1 completely with the man from Images 1–4 while preserving his exact facial identity, hairstyle, and build in every frame. Follow the exact desk posture, subtle facial micro-expressions, and hand movements from Video 1: seated in a black leather high-back executive chair at a warm wood grain desk with a black wireless keyboard and mouse in front of a bright office window, clicking the mouse with his right hand while looking at his monitor, then pausing wistfully, resting his left cheek and jawline against his left hand with his elbow on the desk, and gazing off thoughtfully in quiet nostalgic reflection. Keep hand-to-mouse and hand-to-face contact anatomically natural. No captions, no text overlays, no emojis, no watermarks. Audio: quiet agency office ambience, two subtle mouse clicks at the start, and soft room tone; no speech and no music.',
  },
  {
    code: '09',
    batch: 2,
    title: 'Two-Angle Hedge Trimming',
    sceneSummary: 'Shearing a dense thuja hedge flat across side profile and elevated 3/4 overhead shots.',
    niche: 'Landscape Design',
    mode: 'Ref-to-Video',
    modeDetail: 'Ref-to-Video',
    influencer: 'Marcus Brenner',
    influencerId: '#8431',
    durationSec: 10,
    actualDurationSec: 10.01,
    costUsd: 0.8,
    resolution: '1080×1920',
    fileSizeMb: 27.7,
    inferenceSec: 768.2,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: 'bd7fb0f4709f474685efc5642c289b48',
    predictionId: '442a0c6232ae4f8692237b5587d6795d',
    folderId: '1u43xvO-jFd1wv_5RDhMl7KjrQ18xTmB5',
    outputVideoId: '19SEBg7mj8Y6KvapXPw_l5lohfY7PwS8H',
    outputVideoLabel: 'Native Trimmer Foley',
    muxedVideoId: '1pymro4lojMb4HR1Lp2k1_M8QkwRLIOFE',
    sourceVideoId: '1mo6-g6wuktzuGpU9t9BMfDX02RuikUxZ',
    sourceClipLabel: 'Clip #4363 · 11.7s 720p',
    referencePhotos: [
      { id: '1cy7dc-R0-wcXg5E6HIskdyLrMlnVAU7H', label: 'Photo #5678' },
      { id: '1yFd67h49kGRDADmjF5uiUXoybQ9T4ok2', label: 'Photo #5675' },
      { id: '1HQLg5O__eyCPZ2oyt2Uhf5HQayrUAb_p', label: 'Photo #5682' },
      { id: '1ODPFafFhPDJbnEqkjJ4ZRSdh228Y9uuT', label: 'Photo #5686' },
    ],
    notes:
      'Preserved Marcus’s bearded likeness, olive field jacket, orange backpack battery harness, and cordless orange hedge trimmer blade across BOTH the side profile shot and the elevated 3/4 overhead shot while shearing green hedge clippings cleanly with realistic electric trimmer audio.',
    prompt:
      'Recreate Video 1 (@video_1) as a photorealistic 9:16 vertical live-action outdoor landscaping reel starring ONLY the male landscape designer shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4): a 39-year-old ruggedly handsome man with short brown hair, a neatly trimmed short beard, wearing an olive utility field jacket over a dark henley shirt, work pants, and brown leather boots, with no hat so his face and hair remain clearly visible. Replace the worker in Video 1 completely with the man from Images 1–4 while locking his exact bearded face, hair, and sturdy build across both camera angles. Follow the exact action sequence, camera angles, and tool physics from Video 1: wearing a professional battery backpack harness, he holds a long orange-accented cordless power hedge trimmer with both hands and sweeps it smoothly across the flat top of a tall, dense emerald-green thuja hedge beside a sunlit residential street, shearing fresh green clippings cleanly off the hedge top from a side profile shot and then from an elevated three-quarter overhead angle. Keep the hedge trimmer blade, two-handed grip, and falling green clippings crisp and physically realistic. No captions, no text overlays, no watermarks. Audio: realistic outdoor electric cordless hedge trimmer hum, crisp leafy clipping rustle, and natural daylight neighborhood ambience; no speech and no music.',
  },
  {
    code: '10',
    batch: 2,
    title: 'Incline Dumbbell Bicep Curls',
    sceneSummary: 'Seated incline curls with heavy red 50-lb dumbbells with clean caption removal.',
    niche: 'Fitness',
    mode: 'Ref-to-Video',
    modeDetail: 'Ref-to-Video',
    influencer: 'Caleb Fischer',
    influencerId: '#8423',
    durationSec: 8,
    actualDurationSec: 8.01,
    costUsd: 0.64,
    resolution: '1080×1920',
    fileSizeMb: 7.1,
    inferenceSec: 664.3,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: '7ab46e7f4a724c6b95bcab9f8aced884',
    predictionId: '9c173ade2e3843a1b90468139b3098f1',
    folderId: '1U5V_pNdbFupW8BMTxBOTmcgkoupYexYy',
    outputVideoId: '1NptCCaom4iLsyZbc8Q8egb_khbFQ_TGQ',
    outputVideoLabel: 'Native Gym Foley',
    muxedVideoId: '1K1C_zRiFV9Xcod0PwxXE-BIGejIn4n0F',
    sourceVideoId: '1nsaiPQkS7NJ8jRvGPkDJf7ZoLNWhxPC1',
    sourceClipLabel: 'Clip #4137 · 7.9s 720p',
    referencePhotos: [
      { id: '17ogo9cdPkKu5NeEpkIBwLvMfyYCUl1lb', label: 'Photo #5477' },
      { id: '1_tB2BySVZjFsnQsXh8MkbFQMwGcDZStK', label: 'Photo #5478' },
      { id: '1RQdEaecaPn1Iizv7YBxeAxh_U968pjUs', label: 'Photo #5475' },
      { id: '1u-uIluCuaAUYyb4iZ3hg0Zj0E8LrsqlQ', label: 'Photo #5482' },
    ],
    notes:
      'Removed 100% of both baked-in text overlays ("POV: you started doing bicep curls..." + "Follow 4 Daily Tips...") while locking Caleb’s exact sandy-blond hair, facial structure, wrist wraps, and heavy red 50-lb incline dumbbell bicep curls.',
    prompt:
      'Recreate Video 1 (@video_1) as a photorealistic 9:16 vertical live-action strength training gym reel starring ONLY the male fitness coach shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4): a 27-year-old athletic man with short textured sandy-blond hair, chiseled clean-shaven features, and a muscular build, wearing a fitted black athletic crew t-shirt, black gym shorts, white crew socks, and white training sneakers. Replace the foreground lifter in Video 1 completely with the blond man from Images 1–4 while locking his exact face, blond hair, and muscular proportions across every frame. Follow the exact exercise form, timing, and camera zoom from Video 1: seated on an angled incline weight bench inside a modern commercial gym holding two heavy red dumbbells hanging straight down at his sides, leaning his upper back firmly into the incline pad, and curling both red dumbbells smoothly up toward his shoulders with controlled bicep contraction, lowering them to full extension, and curling a second strict rep with focused athletic intensity. Keep dumbbell plates, wrists, forearms, and incline bench geometry solid and realistic. No captions, no on-screen text, no watermarks. Audio: authentic gym room acoustics, controlled athletic exhale on each curl concentric, and subtle rubber floor and bench contact; no speech and no background music.',
  },
  {
    code: '11',
    batch: 2,
    title: 'Kitchen Sink P-Trap Pour',
    sceneSummary: 'Unscrewing under-sink PVC U-bend drain trap and pouring trapped water into stainless sink.',
    niche: 'Plumbers',
    mode: 'Ref-to-Video',
    modeDetail: 'Ref-to-Video',
    influencer: 'Gerrard Mullins',
    influencerId: '#8414',
    durationSec: 10,
    actualDurationSec: 10.01,
    costUsd: 0.8,
    resolution: '1080×1920',
    fileSizeMb: 8.8,
    inferenceSec: 739.0,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: 'd52dd45398cf4c88bb02ce684c0e0bde',
    predictionId: '0dbf401ab2324aef9fec8231afb2ef1e',
    folderId: '14x8KAREpK8qoXmeI-syERbiZcIyyQaIk',
    outputVideoId: '1iAV0m0B-Iord0LGD-W10UaDO0cH4_-1q',
    outputVideoLabel: 'Native Plumbing Foley',
    muxedVideoId: '1_T2BMxsFUYGeNbb3yKSV5m847_tg6XH9',
    sourceVideoId: '1nT7AdYG1NvFCDgsBC8PuT0mP1aIXKCrj',
    sourceClipLabel: 'Clip #3922 · 12.0s 720p',
    referencePhotos: [
      { id: '1loo9Cx-danYLDgfm59y6pcqL_uk7N7P7', label: 'Photo #5333' },
      { id: '1ftvrpG7fggP07pX_1v8iPNxXbkt2GCni', label: 'Photo #5334' },
      { id: '1D4SxpOfufdM5OnCp9rarIleQS-r81h8z', label: 'Photo #5336' },
      { id: '1L0grTS5W-1bAADKq715xJJ3WX4ygO7Ns', label: 'Photo #5343' },
    ],
    notes:
      'Removed all baked-in text ("Every Plumber Will Do It Once") and accurately rendered the white PVC U-bend P-trap unscrewing and trapped water pouring into the stainless sink. Edge-case finding: in Shot 1’s dark under-sink cabinet corner, MAGI-2 partially kept the source plumber’s shadowed facial hair before locking 100% onto Gerrard Mullins across Shots 2–4.',
    prompt:
      'Recreate Video 1 (@video_1) as a photorealistic 9:16 vertical live-action residential plumbing reel starring ONLY the master plumber shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4): a 36-year-old sturdy man with short sandy-brown hair, light rugged stubble, friendly blue-collar features, wearing a dark navy short-sleeve work henley shirt and blue work jeans. Replace the plumber in Video 1 completely with the man from Images 1–4 while locking his exact face, sandy hair, light stubble, and build across every shot. Follow the exact hands-on kitchen sink P-trap action sequence from Video 1: first peering from inside a wooden under-sink cabinet as he unscrews the white plastic slip-nut on a PVC drain trap by hand, then standing in the bright kitchen holding up the detached white PVC U-bend P-trap pipe to inspect it, tipping the white PVC U-bend over the stainless steel kitchen sink so trapped water pours cleanly down the sink drain, and looking straight up into the camera with a relatable deadpan realization expression. Keep the white PVC P-trap, threaded slip nuts, water pour, stainless sink, and fingers physically accurate. No captions, no text overlays, no watermarks. Audio: realistic kitchen cabinet acoustics, plastic PVC slip-nut unscrewing squeak, water pouring and splashing into a stainless steel sink basin, and natural room tone; no speech and no background music.',
  },
  {
    code: '12',
    batch: 2,
    title: 'Boardroom Notebook Closing',
    sceneSummary: 'Cross-gender recreation: taking notes, closing hardcover notebook, chin-resting reaction.',
    niche: 'Entrepreneurs',
    mode: 'Ref-to-Video',
    modeDetail: 'Ref-to-Video',
    influencer: 'Jia Lin',
    influencerId: '#8427',
    durationSec: 7,
    actualDurationSec: 7.01,
    costUsd: 0.56,
    resolution: '1080×1920',
    fileSizeMb: 4.9,
    inferenceSec: 629.6,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: 'bacde843c33b4c488c39f77c2c9a81d1',
    predictionId: 'e5d1c523a558440b91d463be90f090e8',
    folderId: '15G3zeN-HgRRidrlwZvoJ8kbtoxZnE3jD',
    outputVideoId: '1L6sBlYISmC8XzLfOi4aBKB8Oe652PBtt',
    outputVideoLabel: 'Native Boardroom Foley',
    muxedVideoId: '1Fqgt0d36pWV2aWtZ_xWVUHjeJNWv9EtK',
    sourceVideoId: '1UHrgWXpcpiUL_3N_SGnHJTw0fk5LCIlX',
    sourceClipLabel: 'Clip #4308 · 6.5s 720p',
    referencePhotos: [
      { id: '1CmNt0IefGrrHDvPSicL4n0g3DA--47jE', label: 'Photo #5570' },
      { id: '1gT4nfREetMTH3z09qKfZ1Fj7W8DNoXHp', label: 'Photo #5601' },
      { id: '1oF1cYkioyd1kYGYjLgjCuNHkUA_aatqd', label: 'Photo #5597' },
      { id: '10daJ6Sk6oW0kiQ42kdjhnowFF1F2ofFR', label: 'Photo #5573' },
    ],
    notes:
      'Flawless cross-gender Viral recreation: replaced the male boardroom subject with Jia Lin (#8427), erased all 4 lines of center-screen baked-in caption text, and preserved exact pen-writing, hardcover notebook closing, and chin-resting gestures.',
    prompt:
      'Recreate Video 1 (@video_1) as a photorealistic 9:16 vertical live-action startup boardroom reel starring ONLY the young female entrepreneur shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4): a 27-year-old East Asian woman with straight shoulder-length black hair, thin round wire-frame glasses, wearing a clean charcoal jacket over a soft grey knit top. Replace the person in Video 1 completely with the woman from Images 1–4 while locking her exact face, thin round glasses, straight black hair, and natural proportions across every frame. Follow the exact conference-table framing, notebook-and-pen hand interaction, and comedic timing from Video 1: seated at a sleek dark matte executive boardroom table with recessed architectural lighting behind her, writing notes attentively with a pen inside an open cream hardcover notebook, glancing up toward the front of the meeting room, slowly closing the hardcover notebook upright with both hands, and resting her chin and mouth thoughtfully against her hand as she watches the room in quiet disbelief. Keep the pen, notebook pages, glasses frames, and fingers crisp and physically grounded. No captions, no on-screen text overlays, no watermarks. Audio: quiet executive boardroom room tone, subtle pen-on-paper scratch at the beginning, and the soft crisp sound of pages and a hardcover notebook closing; no speech and no background music.',
  },
  {
    code: '13',
    batch: 3,
    title: 'Company Reels Like Reaction',
    sceneSummary:
      'Liking company reels on phone at desk while preserving 3-line burned-in caption verbatim.',
    niche: 'Agency Owners',
    mode: 'Raw Text Retention',
    modeDetail: 'Raw Text Ref-to-Video',
    influencer: 'Stephanie Caldwell',
    influencerId: '#8434',
    durationSec: 5,
    actualDurationSec: 5.0,
    costUsd: 0.4,
    resolution: '1080×1920',
    fileSizeMb: 4.4,
    inferenceSec: 608.4,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: '9f5d3f3bbad84f40a928d4c821a2db9d',
    predictionId: 'ae307a2fe91d4f169a8db7e7ec3ff902',
    folderId: '1WsxwCri1df6pfUsv8Z4ZCo_mVTnUtXKq',
    outputVideoId: '12lNQufu_Y7fMU2Ke-Ni3XyGS0eNFOus5',
    outputVideoLabel: 'Raw Output Only',
    sourceVideoId: '1u-d3MqaztcF2C9MV7Gz_7fcAwabwh7Wu',
    sourceClipLabel: 'Clip #4503 · 5.3s 720p',
    referencePhotos: [
      { id: '1TqfRBzy5f9PH2Wy0M-Tzx0pVGsKGSPNF', label: 'Photo #5717' },
      { id: '13U-VQu2YKriSrxqJnCFS3NvFTfAdFBcq', label: 'Photo #5739' },
      { id: '16VMQP-Y6UoKCmwGkKLzd2rG8ursrOB78', label: 'Photo #5742' },
      { id: '1Y29vCYWgxMxud0W38kB6Bnoy8iGEweWe', label: 'Photo #5743' },
    ],
    notes:
      '100% verbatim across all 3 lines (exact spelling, font, line breaks, and ceiling-area placement). Full scene, laptop, phone, white cap, and Stephanie Caldwell likeness locked cleanly.',
    prompt:
      'Replace the main person in @video_1 with the person shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4). Use @image_1, @image_2, @image_3, and @image_4 as the ONLY identity source for the main person. Preserve their exact face, facial structure, hair, skin tone, apparent age, and natural body proportions consistently throughout every frame. Do not blend their appearance with the original person in @video_1, and do not copy the backgrounds from @image_1–@image_4. Preserve @video_1 closely: keep the same scene, environment, lighting, camera angle, framing, camera movement, shot timing, poses, gestures, facial-expression timing, and physical interactions with objects. Dress the replaced person in realistic, scene-appropriate clothing consistent across the clip. Retain all on-screen text, captions, and text overlays from @video_1 verbatim: preserve the exact wording, spelling, capitalization, punctuation, font style, layout, color, and screen position throughout the entire video without deleting, rewriting, or garbling any letters. Do not add any new watermarks or extra text that is not in @video_1.',
  },
  {
    code: '14',
    batch: 3,
    title: 'Scrolling IG Reels in 2026',
    sceneSummary:
      'Scrolling IG reels with solid black caption box retained verbatim across cuts.',
    niche: 'Agency Owners',
    mode: 'Raw Text Retention',
    modeDetail: 'Raw Text Ref-to-Video',
    influencer: 'Victor Ramirez',
    influencerId: '#8430',
    durationSec: 8,
    actualDurationSec: 8.01,
    costUsd: 0.64,
    resolution: '1080×1920',
    fileSizeMb: 5.4,
    inferenceSec: 676.5,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: 'f3aec348a21d47959e774be423082842',
    predictionId: 'f3c4c40fc84b42429d943a2062d089b9',
    folderId: '1rlUtQhhKLg3TrrT9_W7m3WW8PXOCr5OR',
    outputVideoId: '16bq6H6ORCvafGv364ty0qFrCWAba0Qqf',
    outputVideoLabel: 'Raw Output Only',
    sourceVideoId: '1tVcJjW35AnOOOwz0LYIokVJGzVs9qF-5',
    sourceClipLabel: 'Clip #4513 · 8.1s 720p',
    referencePhotos: [
      { id: '1ryB8h_MYMmz0qyJT5J6J_-bdnAGb1_W8', label: 'Photo #5633' },
      { id: '1YNXjL2dqZ43z6bbqL7stMm4x4pgpDCDB', label: 'Photo #5637' },
      { id: '12rw2i__gwRuvW-CdxHO8A34RjRmxc87x', label: 'Photo #5639' },
      { id: '11t8Mot6OBdMJujSc-WTyyCvY0TTmvVhy', label: 'Photo #5641' },
    ],
    notes:
      '100% verbatim text inside the solid black rectangle (exact apostrophe, capitalization, 2026, and monospace font). Opens briefly (~1.5s) on Victor’s full-body pose before cutting to the close-up scrolling-phone shot.',
    prompt:
      'Replace the main person in @video_1 with the person shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4). Use @image_1, @image_2, @image_3, and @image_4 as the ONLY identity source for the main person. Preserve their exact face, facial structure, hair, skin tone, apparent age, and natural body proportions consistently throughout every frame. Do not blend their appearance with the original person in @video_1, and do not copy the backgrounds from @image_1–@image_4. Preserve @video_1 closely: keep the same scene, environment, lighting, camera angle, framing, camera movement, shot timing, poses, gestures, facial-expression timing, and physical interactions with objects. Dress the replaced person in realistic, scene-appropriate clothing consistent across the clip. Retain all on-screen text, captions, and text overlays from @video_1 verbatim: preserve the exact wording, spelling, capitalization, punctuation, font style, layout, color, and screen position throughout the entire video without deleting, rewriting, or garbling any letters. Do not add any new watermarks or extra text that is not in @video_1.',
  },
  {
    code: '15',
    batch: 3,
    title: 'Lawnmower Music Hearing Joke',
    sceneSummary:
      'Mowing lawn with 29-word 5-line caption preserved verbatim over fast motion.',
    niche: 'Landscape Design',
    mode: 'Raw Text Retention',
    modeDetail: 'Raw Text Ref-to-Video',
    influencer: 'Leon Grey',
    influencerId: '#8436',
    durationSec: 7,
    actualDurationSec: 7.01,
    costUsd: 0.56,
    resolution: '1080×1920',
    fileSizeMb: 20.7,
    inferenceSec: 276.9,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: 'fc29550be24548e28153de34b3ce1d56',
    predictionId: '7e5e3cc06cef4ad7ae509ecac29bc7cb',
    folderId: '1Sdz-OeNt91tg8SfHo86Hvct4aI7ts7JR',
    outputVideoId: '1JVizlF9EQUbV4NbQXtKpwaq1Eatt0o5f',
    outputVideoLabel: 'Raw Output Only',
    sourceVideoId: '1G8YY42Hv_YlJcO1reIob216l8f0UMec9',
    sourceClipLabel: 'Clip #4368 · 6.8s 720p',
    referencePhotos: [
      { id: '1ntGeWxAUT5dMkE3NUFPig5WR3TgvBl99', label: 'Photo #5758' },
      { id: '1tr5NrOZltTHQEdzUysZz8rBz65PIZ-8R', label: 'Photo #5764' },
      { id: '1v3XDH3QYuIE8cGcFhtbjWiJpMCbWJ7JD', label: 'Photo #5768' },
      { id: '1dtMZBRb-6cYvrSL5m1i-otSgLIcB1VKU', label: 'Photo #5781' },
    ],
    notes:
      '100% verbatim across all 29 words, 5 lines, 2 apostrophes, period, white fill, and black stroke over fast moving outdoor lawnmower footage.',
    prompt:
      'Replace the main person in @video_1 with the person shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4). Use @image_1, @image_2, @image_3, and @image_4 as the ONLY identity source for the main person. Preserve their exact face, facial structure, hair, skin tone, apparent age, and natural body proportions consistently throughout every frame. Do not blend their appearance with the original person in @video_1, and do not copy the backgrounds from @image_1–@image_4. Preserve @video_1 closely: keep the same scene, environment, lighting, camera angle, framing, camera movement, shot timing, poses, gestures, facial-expression timing, and physical interactions with objects. Dress the replaced person in realistic, scene-appropriate clothing consistent across the clip. Retain all on-screen text, captions, and text overlays from @video_1 verbatim: preserve the exact wording, spelling, capitalization, punctuation, font style, layout, color, and screen position throughout the entire video without deleting, rewriting, or garbling any letters. Do not add any new watermarks or extra text that is not in @video_1.',
  },
  {
    code: '16',
    batch: 3,
    title: 'Treadmill Gym Crush Glance',
    sceneSummary:
      'Walking on treadmill while retaining informal "When you see ur gym crush:" overlay.',
    niche: 'Fitness',
    mode: 'Raw Text Retention',
    modeDetail: 'Raw Text Ref-to-Video',
    influencer: 'Tania Rowe',
    influencerId: '#8421',
    durationSec: 10,
    actualDurationSec: 10.01,
    costUsd: 0.8,
    resolution: '1080×1920',
    fileSizeMb: 9.0,
    inferenceSec: 686.8,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: '5fd20d38f7ba4a8b8583e827072c4aea',
    predictionId: '007b486a309046658e4485b0e40a62db',
    folderId: '1cuH_6K3-s1kaQSHbM75S8m05K6QyremT',
    outputVideoId: '1bf1zTNnJyQPcvDew-dK-3V_kJL0LZiIG',
    outputVideoLabel: 'Raw Output Only',
    sourceVideoId: '1Q-y-WruPXMObcBYnNh1854aYH9S9QLvt',
    sourceClipLabel: 'Clip #4138 · 9.9s 720p',
    referencePhotos: [
      { id: '1Kf6o5450PFnQ7QlsRYS532OjgAcWECVA', label: 'Photo #5399' },
      { id: '1gbV0fFe5RHxQPuL5Sz6DnOS7mr4oV7RX', label: 'Photo #5401' },
      { id: '1OH4268zjsgPMez-GA0u5TjP5oYPwU9Ar', label: 'Photo #5402' },
      { id: '1xzPeY4OZbz4fa24J-MSDNu22fBwUCHte', label: 'Photo #5404' },
    ],
    notes:
      '100% verbatim across all 10s — preserved informal "ur" without autocorrecting, colon punctuation, black outline, treadmill action, cupholder items, and Tania Rowe’s likeness + curly bun.',
    prompt:
      'Replace the main person in @video_1 with the person shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4). Use @image_1, @image_2, @image_3, and @image_4 as the ONLY identity source for the main person. Preserve their exact face, facial structure, hair, skin tone, apparent age, and natural body proportions consistently throughout every frame. Do not blend their appearance with the original person in @video_1, and do not copy the backgrounds from @image_1–@image_4. Preserve @video_1 closely: keep the same scene, environment, lighting, camera angle, framing, camera movement, shot timing, poses, gestures, facial-expression timing, and physical interactions with objects. Dress the replaced person in realistic, scene-appropriate clothing consistent across the clip. Retain all on-screen text, captions, and text overlays from @video_1 verbatim: preserve the exact wording, spelling, capitalization, punctuation, font style, layout, color, and screen position throughout the entire video without deleting, rewriting, or garbling any letters. Do not add any new watermarks or extra text that is not in @video_1.',
  },
  {
    code: '17',
    batch: 3,
    title: 'Peaceful Crawlspace Piping',
    sceneSummary:
      'Working among crawlspace joists with 2-line white caption preserved verbatim.',
    niche: 'Plumbers',
    mode: 'Raw Text Retention',
    modeDetail: 'Raw Text Ref-to-Video',
    influencer: 'Joel Carter',
    influencerId: '#8409',
    durationSec: 10,
    actualDurationSec: 10.01,
    costUsd: 0.8,
    resolution: '1080×1920',
    fileSizeMb: 3.7,
    inferenceSec: 839.3,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: '02f38558d45145cb8e07f8247734a3d8',
    predictionId: '0c49c158d71c45859488acccdf8082b1',
    folderId: '1JxTD6HSiC19mR_qmFftKuoibnkrVcTsV',
    outputVideoId: '1h2NllUsFpHCS2u-OWuvM59zUalOf88Dc',
    outputVideoLabel: 'Raw Output Only',
    sourceVideoId: '1jn_itBeslNB0awAiYJm0dcqGelQcMTey',
    sourceClipLabel: 'Clip #3950 · 10.0s 720p',
    referencePhotos: [
      { id: '1UezSPpMoD9qzzBqLnPVRHCD_SZ0maVqj', label: 'Photo #5331' },
      { id: '1NY0xKpuKtB4V-NYE_RCjDj1-1LiiMSgF', label: 'Photo #5347' },
      { id: '18AGx29QTjbE-6_QhDqHt85WQxQh0F-va', label: 'Photo #5352' },
      { id: '1x1Jl6iGeIqTVVK1PhwgHT12y9UJW4ezg', label: 'Photo #5497' },
    ],
    notes:
      '100% verbatim condensed 2-line white caption across all 10s; crawlspace joists, PVC pipe, and Joel Carter’s silver beard and facial features preserved cleanly.',
    prompt:
      'Replace the main person in @video_1 with the person shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4). Use @image_1, @image_2, @image_3, and @image_4 as the ONLY identity source for the main person. Preserve their exact face, facial structure, hair, skin tone, apparent age, and natural body proportions consistently throughout every frame. Do not blend their appearance with the original person in @video_1, and do not copy the backgrounds from @image_1–@image_4. Preserve @video_1 closely: keep the same scene, environment, lighting, camera angle, framing, camera movement, shot timing, poses, gestures, facial-expression timing, and physical interactions with objects. Dress the replaced person in realistic, scene-appropriate clothing consistent across the clip. Retain all on-screen text, captions, and text overlays from @video_1 verbatim: preserve the exact wording, spelling, capitalization, punctuation, font style, layout, color, and screen position throughout the entire video without deleting, rewriting, or garbling any letters. Do not add any new watermarks or extra text that is not in @video_1.',
  },
  {
    code: '18',
    batch: 3,
    title: 'Founder Working & Content Crew',
    sceneSummary:
      'Typing on laptop in lounge chair with sparkle emoji caption retained verbatim.',
    niche: 'Entrepreneurs',
    mode: 'Raw Text Retention',
    modeDetail: 'Raw Text Ref-to-Video',
    influencer: 'David Tran',
    influencerId: '#8426',
    durationSec: 7,
    actualDurationSec: 7.01,
    costUsd: 0.56,
    resolution: '1080×1920',
    fileSizeMb: 5.2,
    inferenceSec: 796.6,
    endpoint: 'sand-ai/magi-2/reference-to-video',
    billingUuid: 'f17bd5e517d34f49ba34dca9bd309ca0',
    predictionId: '70e1e0c9d6494450bbc50a728aabde27',
    folderId: '1BGVMuLNaFdZZdZdaTyGhdZ86NAica2dO',
    outputVideoId: '1qejNZ4kp__mCSDfkHVz-XGlMLEXMgGFh',
    outputVideoLabel: 'Raw Output Only',
    sourceVideoId: '1UkxEB7nGfZf64aAjACBiTNljYOHLxd9_',
    sourceClipLabel: 'Clip #4306 · 6.8s 720p',
    referencePhotos: [
      { id: '192NAvC93IPCL87USGwmTaTRJkdtBicsv', label: 'Photo #5538' },
      { id: '1I6aXvWwYfsr2W5Cdcj9LMDTDSoEYZNI-', label: 'Photo #5546' },
      { id: '1jUKHSJuoMRja-ENfvC1LJJ_rI4sMFIqN', label: 'Photo #5547' },
      { id: '1e5lLQGWIlfthaJ2swHPqxan9kL6rQdCm', label: 'Photo #5548' },
    ],
    notes:
      '100% verbatim across all 3 lines including both yellow sparkle emojis (✨creating content✨), lounge chair + laptop typing + background crew filming behind glass, and David Tran’s identity.',
    prompt:
      'Replace the main person in @video_1 with the person shown in Reference Images 1–4 (@image_1, @image_2, @image_3, @image_4). Use @image_1, @image_2, @image_3, and @image_4 as the ONLY identity source for the main person. Preserve their exact face, facial structure, hair, skin tone, apparent age, and natural body proportions consistently throughout every frame. Do not blend their appearance with the original person in @video_1, and do not copy the backgrounds from @image_1–@image_4. Preserve @video_1 closely: keep the same scene, environment, lighting, camera angle, framing, camera movement, shot timing, poses, gestures, facial-expression timing, and physical interactions with objects. Dress the replaced person in realistic, scene-appropriate clothing consistent across the clip. Retain all on-screen text, captions, and text overlays from @video_1 verbatim: preserve the exact wording, spelling, capitalization, punctuation, font style, layout, color, and screen position throughout the entire video without deleting, rewriting, or garbling any letters. Do not add any new watermarks or extra text that is not in @video_1.',
  },
];
