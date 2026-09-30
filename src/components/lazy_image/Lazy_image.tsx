import { useState, type ReactNode } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import "./lazy_image.css";

interface LazyImageProps {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
}

type Status = "loading" | "loaded" | "error";

export function Lazy_image({
  src,
  alt,
  loading = "lazy",
}: LazyImageProps): ReactNode {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("loading");

  return (
    <div className={`lazy-image lazy-image--${status}`}>
      {status === "loading" && (
        <span
          className="lazy-image-spinner"
          role="status"
          aria-label={t.image.loading}
        />
      )}
      {status === "error" && (
        <span className="lazy-image-error">{t.image.error}</span>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </div>
  );
}
