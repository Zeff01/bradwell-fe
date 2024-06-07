export type ContactInfo = {
  companyName: string;
  email: string;
  telephone: string;
  cellphones: string[];
  socialMedia: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
};

export const contact: ContactInfo = {
  companyName: "Bradwell Sales & Marketing Corporation.",
  email: "armand@bradwell.ph",
  telephone: "8556-2179",
  cellphones: [
    "+639 966 643 2128",
    "+639 992 558 5203",
    "+639 977 324 0927",
    "+639 932 194 4240",
  ],
  socialMedia: {
    facebook: "https://web.facebook.com/bradwellcorp?_rdc=1&_rdr",
    instagram: "https://www.instagram.com/bradwellcorp/",
    tiktok: "https://www.tiktok.com/@bradwellcorp",
  },
};

export const downloadVCard = (userData: ContactInfo): void => {
  // Manually create vCard data
  let vCardString = "BEGIN:VCARD\n";
  vCardString += "VERSION:3.0\n";
  vCardString += `FN:${userData.companyName}\n`;
  vCardString += `ORG:${userData.companyName}\n`;
  vCardString += `TEL;TYPE=WORK,VOICE:${userData.telephone}\n`;
  userData.cellphones.forEach((phone) => {
    vCardString += `TEL;TYPE=CELL:${phone}\n`;
  });
  vCardString += `EMAIL:${userData.email}\n`;

  vCardString += `URL:${userData.socialMedia.facebook}\n`;
  vCardString += `URL:${userData.socialMedia.instagram}\n`;
  vCardString += `URL:${userData.socialMedia.tiktok}\n`;
  vCardString += "END:VCARD";

  // Create a Blob from the vCard String
  const blob = new Blob([vCardString], { type: "text/vcard;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "Bradwell.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
