import VCard from "vcard-creator";
export const downloadTxtFile = (vcfText: string) => {
  return () => {
    const element = document.createElement("a");
    const file = new Blob([vcfText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "BRADWELL.vcf";
    document.body.appendChild(element);
    element.click();
  };
};

export const createVCard = () => {
  const v = new VCard();
  v.addCompany("Bradwell Sales & Marketing Corp.");
  v.addEmail("armand@bradwell.ph", "WORK");
  v.addPhoneNumber("+639 966 643 2128", "WORK");
  v.addPhoneNumber("+639 992 558 5203", "WORK");
  v.addPhoneNumber("+639 977 324 0927", "WORK");
  v.addPhoneNumber("+639 932 194 4240", "WORK");

  return v.toString();
};
