import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MAGI_TESTS,
  buildDriveThumbUrl,
  buildDriveVideoUrl,
} from '../data/magiTests';
import {
  computeSummaryStats,
  filterTests,
  formatCurrencyUsd,
} from './filterTests';

test('MAGI_TESTS dataset contains all 18 verified evaluations totaling $11.92 and 149s', () => {
  const stats = computeSummaryStats(MAGI_TESTS);
  assert.equal(stats.totalCount, 18);
  assert.equal(stats.totalDurationSec, 149);
  assert.equal(formatCurrencyUsd(stats.totalCostUsd), '$11.92');
  assert.equal(stats.nicheCounts.Fitness, 4);
  assert.equal(stats.nicheCounts.Plumbers, 4);
  assert.equal(stats.nicheCounts.Entrepreneurs, 4);
  assert.equal(stats.nicheCounts['Agency Owners'], 4);
  assert.equal(stats.nicheCounts['Landscape Design'], 2);
  assert.equal(stats.modeCounts['Ref-to-Video'], 9);
  assert.equal(stats.modeCounts['Raw Text Retention'], 6);
  assert.equal(stats.modeCounts['4-Photo Promo'], 2);
  assert.equal(stats.modeCounts['1-Photo Img-to-Video'], 1);
});

test('filterTests filters by niche and mode accurately', () => {
  const entrepreneurs = filterTests(MAGI_TESTS, {
    niche: 'Entrepreneurs',
    mode: 'All',
  });
  assert.deepEqual(
    entrepreneurs.map((t) => t.code),
    ['03', '06', '12', '18']
  );

  const rawTextOnly = filterTests(MAGI_TESTS, {
    niche: 'All',
    mode: 'Raw Text Retention',
  });
  assert.deepEqual(
    rawTextOnly.map((t) => t.code),
    ['13', '14', '15', '16', '17', '18']
  );

  const promoOnly = filterTests(MAGI_TESTS, {
    niche: 'All',
    mode: '4-Photo Promo',
  });
  assert.deepEqual(
    promoOnly.map((t) => t.code),
    ['04', '05']
  );

  const emptyCombination = filterTests(MAGI_TESTS, {
    niche: 'Landscape Design',
    mode: '4-Photo Promo',
  });
  assert.equal(emptyCombination.length, 0);
});

test('filterTests matches search query across influencer, title, and code', () => {
  const clara = filterTests(MAGI_TESTS, {
    niche: 'All',
    mode: 'All',
    query: 'clara',
  });
  assert.deepEqual(
    clara.map((t) => t.code),
    ['07']
  );

  const plumberByTitle = filterTests(MAGI_TESTS, {
    niche: 'All',
    mode: 'All',
    query: 'p-trap',
  });
  assert.deepEqual(
    plumberByTitle.map((t) => t.code),
    ['11']
  );
});

test('Drive media URL builders produce valid direct endpoints', () => {
  const videoUrl = buildDriveVideoUrl('10ibJBGCqeqzANbIX1ob2PWp_Y8ep5B_o');
  assert.equal(
    videoUrl,
    '/api/media/10ibJBGCqeqzANbIX1ob2PWp_Y8ep5B_o'
  );
  const thumbUrl = buildDriveThumbUrl('10ibJBGCqeqzANbIX1ob2PWp_Y8ep5B_o', 800);
  assert.equal(
    thumbUrl,
    'https://lh3.googleusercontent.com/d/10ibJBGCqeqzANbIX1ob2PWp_Y8ep5B_o=w800'
  );
});
