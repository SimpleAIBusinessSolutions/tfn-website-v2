export {};

declare global {
  interface Window {
    __CMS__?: {
      init: (config: {
        siteKey?: string;
        key: string;
        supabaseUrl?: string;
        supabaseAnonKey?: string;
      }) => void;
    };
  }
}