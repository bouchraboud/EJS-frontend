
import Header from "@/components/TeleExpertise/Header";

export const metadata = {
  title: "TéléExpertise",
  description:
    "Connecter les médecins pour des soins meilleurs et plus rapides",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
