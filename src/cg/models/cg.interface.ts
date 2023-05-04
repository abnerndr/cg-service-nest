/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable prettier/prettier */
export interface ICongregation {
  id?: string;
  name?: string;
  president_name?: string;
  publishers?: [];
  code?: string;
  address: {
    zip_code?: string;
    street?: string;
    street_number?: string;
    neighborhood?: string;
    state?: string;
    city?: string;
  };
  photo_url?: string;
}
