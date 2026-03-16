import { useState, useEffect } from 'react';

let foundReports = [];
let lostReports = [];
const listeners = new Set();

function notify() {
  listeners.forEach((fn) => fn());
}

export function addFoundReport(report) {
  foundReports = [
    {
      id: `${Date.now()}-found`,
      createdAt: new Date().toISOString(),
      status: 'Aguardando entrega na secretaria',
      ...report,
    },
    ...foundReports,
  ];
  notify();
}

export function addLostReport(report) {
  lostReports = [
    {
      id: `${Date.now()}-lost`,
      createdAt: new Date().toISOString(),
      status: 'Aguardando novas informações',
      ...report,
    },
    ...lostReports,
  ];
  notify();
}

export function useReports() {
  const [, forceRender] = useState(0);

  useEffect(() => {
    const listener = () => forceRender((n) => n + 1);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  return { foundReports, lostReports };
}