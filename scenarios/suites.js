export const scenarios = {
  smoke: {
    executor: 'shared-iteration',
    exec: 'runSmokeTest',
    duration: '30s',
    vus: 1,
    iterations: 1,
    maxDurations: '30s',
    tags: { test_type: 'smoke-test'},
  },
  load: {
    executor: 'ramping-vus',
    exec: 'runLoadTest',
    startVUs: 0,
    stages: [
      {durations: '30s', target:5},
      {durations: '30s', target:10},
      {durations: '30s', target:20},
      {durations: '30s', target:0},
    ],
    gracefulStop: '10s',
    tags: { test_type: 'load-test'},
  },
  stress: {
    executor: 'ramping-vus',
    exec: 'runStessTest',
    startVUs: 0,
    stages: [
      {durations: '30s', target:100},
      {durations: '30s', target:1000},
      {durations: '30s', target:500},
      {durations: '30s', target:1000},
      {durations: '30s', target:0},
    ],
    gracefulStop: '10s',
    tags: { test_type: 'stress-test'},
  }
}

export function getScenarios() {
  const targetScenario = __ENV.SCENARIO;
  if (targetScenario && scenarios[targetScenario]) {
    return { [targetScenario]: scenarios[targetScenario] };
  }
  return {smoke: scenarios.smoke}

} 