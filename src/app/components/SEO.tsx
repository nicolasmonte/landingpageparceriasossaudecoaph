import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function SEO({
  title = "COAPH + VALUT | Antecipação e Atraso Zero para Cooperados",
  description = "Parceria oficial entre COAPH e VALUT oferecendo antecipação de produção e programa Atraso Zero. Receba sua produção sem atrasos e antecipe quando precisar. 100% digital.",
  keywords = "COAPH, VALUT, antecipação produção, cooperados, anestesiologistas, Pernambuco, atraso zero, pagamento garantido, conta digital, fintech saúde",
  ogImage = "https://seu-dominio.com.br/og-image.jpg", // Substitua com URL real após deploy
  ogUrl = "https://seu-dominio.com.br" // Substitua com URL real após deploy
}: SEOProps) {
  
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: ogUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'pt_BR' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      
      // Additional SEO
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'COAPH + VALUT' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#DC2626' },
      { httpEquiv: 'Content-Language', content: 'pt-BR' },
    ];

    metaTags.forEach(({ name, property, content, httpEquiv }) => {
      const selector = name 
        ? `meta[name="${name}"]`
        : property
        ? `meta[property="${property}"]`
        : `meta[http-equiv="${httpEquiv}"]`;
      
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        if (httpEquiv) element.setAttribute('http-equiv', httpEquiv);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = ogUrl;

  }, [title, description, keywords, ogImage, ogUrl]);

  return null;
}
