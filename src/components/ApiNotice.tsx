type ApiNoticeProps = {
  message: string | null;
};

export function ApiNotice({ message }: ApiNoticeProps) {
  if (!message) return null;

  return <div className="api-notice">{message}</div>;
}
