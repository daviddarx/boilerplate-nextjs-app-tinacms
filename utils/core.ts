import { detect } from 'detect-browser';

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('de-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export function getSystem() {
  const detected = detect();

  if (detected && detected.os && detected.name) {
    let os = detected.os.replace(/\s+/g, '') as string;
    let browser = detected.name.replace(/\s+/g, '') as string;

    if (detected.os.indexOf('Windows') > -1) {
      os = 'windows';
    } else if (detected.os.indexOf('Mac') > -1) {
      os = 'mac';
    } else if (detected.os.indexOf('iOS') > -1) {
      os = 'ios';
    } else if (detected.os.indexOf('Android') > -1) {
      os = 'android';
    }

    const ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent);
    const safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

    if (ios && safari) {
      browser = 'safari';
    }

    return {
      os: os,
      browser: browser,
    };
  } else {
    return {
      os: 'not-detected',
      browser: 'not-detected',
    };
  }
}
