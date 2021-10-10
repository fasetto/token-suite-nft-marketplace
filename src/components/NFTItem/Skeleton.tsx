import ContentLoader from "react-content-loader";

export const Skeleton = () => {
  return (
    <ContentLoader
      width={365}
      height={680}
      speed={2}
      backgroundColor="#242424"
      foregroundColor="#2d2d2d"
      viewBox="0 0 365 680"
    >
      <path d="M 0 0 h 360 v 360 H 0 z" />
      <rect x="20" y="380" rx="4" ry="4" width="122" height="28" />
      <rect x="20" y="413" rx="4" ry="4" width="182" height="28" />
      <rect x="20" y="526" rx="6" ry="6" width="210" height="40" />
      <rect x="20" y="466" rx="4" ry="4" width="166" height="22" />
      <rect x="321" y="466" rx="4" ry="4" width="19" height="24" />
      <rect x="20" y="493" rx="4" ry="4" width="108" height="18" />
      <rect x="20" y="571" rx="4" ry="4" width="140" height="18" />
      <rect x="288" y="493" rx="4" ry="4" width="52" height="18" />
      <rect x="308" y="387" rx="6" ry="6" width="24" height="50" />
      <path d="M 20 614 h 150 v 40 H 20 z M 210 614 h 150 v 40 H 210 z" />
    </ContentLoader>
  );
};
