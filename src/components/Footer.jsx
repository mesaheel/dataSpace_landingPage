import FooterLogo from "../assets/FooterLogo.png";
import FooterBsi from "../assets/FooterBsi.png";
const Footer = () => {
  return (
    <div className="bg-[#020E4A]">
      <div className="flex items-center justify-between md:px-[100px] px-[25px] md:pt-[40px] pt-[20px]">
        <img
          src={FooterLogo}
          alt="FooterLogo"
          className="md:h-[70px] h-[70px] md:w-[400px] w-[250px]"
        />
        <img
          src={FooterBsi}
          alt="FooterBsi"
          className="md:h-[65px] h-[50px] md:w-[130px] w-[100px]"
        />
      </div>
      <div className="flex items-start justify-between gap-2 md:px-[100px] px-[25px] md:pt-[40px] pt-[20px]">
        <div className="md:w-[450px] w-[350px]">
          <h2 className="text-[#0D6EFD] md:text-md text-sm pb-2">Kolkata:</h2>
          <p className="text-[#FFFFFF] md:text-sm text-xs">
            Globsyn Crystals, Tower-1, 5th Floor, EP Block, Salt Lake
            Electronics Complex,Sector V, Bidhannagar, Kolkata, West Bengal
            700091
          </p>
        </div>
        <div className="md:w-[450px] w-[350px]">
          <h2 className="text-[#0D6EFD] md:text-md text-sm pb-2">Guwahati :</h2>
          <p className="text-[#FFFFFF] md:text-sm text-xs">
            Natun Bazar, Basistha Road, Near Durga Mandir(Natun Bazar) opposite:
            of Nandini Lodge, Joymati Market, 2nd floor, Basistha, Guwahati-29,
            Assam
          </p>
        </div>
      </div>
      <div className="flex items-start justify-between gap-2 md:px-[100px] px-[25px] md:pt-[40px] pt-[20px] pb-[10px] footerBorder">
        <div className="md:w-[450px] w-[350px]">
          <h2 className="text-[#0D6EFD] md:text-md text-sm pb-2">Delhi :</h2>
          <p className="text-[#FFFFFF] md:text-sm text-xs">
            E-16/169, Sector 8, Rohini, Delhi 110085
          </p>
        </div>
        <div className="md:w-[450px] w-[350px]">
          <h2 className="text-[#0D6EFD] md:text-md text-sm pb-2">KSA :</h2>
          <p className="text-[#FFFFFF] md:text-sm text-xs">
            Electronic Networks & Systems (C.R. 2051040425), Al-Khobar, EP, KSA
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between md:py-[30px] py-[10px] md:px-[100px] px-[30px]">
        <div>
          <p className="text-[#FFFFFF] md:text-sm text-xs">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
        <div>
          <p className="text-[#FFFFFF] md:text-sm text-xs flex gap-1">
            © 2022 <p className="text-[#0D6EFD]"> DataSpace Academy.</p> All
            Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
