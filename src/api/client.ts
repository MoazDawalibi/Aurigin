const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? '/api').replace(/\/$/, '');

type ApiOptions = Omit<RequestInit, 'body'> & {
  body?: BodyInit | Record<string, unknown> | unknown[] | null;
};

export async function apiRequest<T>(path: string, init: ApiOptions = {}): Promise<T> {
  const url = `${apiBaseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const headers = new Headers(init.headers);
  headers.set('Accept', 'application/json');

  let body = init.body as BodyInit | null | undefined;
  if (init.body && !(init.body instanceof FormData) && typeof init.body !== 'string') {
    headers.set('Content-Type', 'application/json');
    body = JSON.stringify(init.body);
  }

  const response = await fetch(url, {
    ...init,
    headers,
    body,
  });

  if (response.status === 204) {
    return undefined as T;
  }

  const contentType = response.headers.get('content-type') ?? '';
  const payload = contentType.includes('application/json') ? await response.json() : await response.text();

  if (!response.ok) {
    const message = typeof payload === 'object' && payload && 'message' in payload ? String(payload.message) : `${response.status} ${response.statusText}`;
    throw new Error(message);
  }

  return payload as T;
}

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  return apiRequest<T>(path, { ...init, method: 'GET' });
}

export async function apiPost<T>(path: string, body: Record<string, unknown> | unknown[]): Promise<T> {
  return apiRequest<T>(path, { method: 'POST', body: body as Record<string, unknown> });
}

export async function apiPut<T>(path: string, body: Record<string, unknown> | unknown[]): Promise<T> {
  return apiRequest<T>(path, { method: 'PUT', body: body as Record<string, unknown> });
}

export async function apiDelete(path: string): Promise<void> {
  return apiRequest<void>(path, { method: 'DELETE' });
}
