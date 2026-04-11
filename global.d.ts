export {};

declare global {
  interface Window {
    __CMS__?: {
      init: (config: {
        siteId?: string;
        key: string;
        supabaseUrl?: string;
        supabaseAnonKey?: string;
      }) => void;
    };
  }
}