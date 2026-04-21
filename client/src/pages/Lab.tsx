export default function Lab() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <iframe
        src="/lab/index.html"
        className="w-full h-full border-0"
        title="Genz Dev Lab"
        allow="fullscreen"
        sandbox="allow-scripts allow-same-origin allow-downloads allow-modals allow-popups"
      />
    </div>
  );
}
