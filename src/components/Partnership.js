import React from "react";
import { HeadingLayout } from "../styles/HeadingSubHeadingLayout";
import {
  PartnershipLayout,
  PartnerCompany,
  CompanyPerson,
  PersonInfo,
  PersonName,
} from "../styles/ParnershipLayout";
import { StaticImage } from "gatsby-plugin-image";

const Partnership = () => {
  return (
    <PartnershipLayout>
      <HeadingLayout>Backed by the Best.</HeadingLayout>
      <PartnerCompany>
        <StaticImage
          src="../assets/Images/orios.png"
          alt="orios"
          width={185}
          height={40}
        />
        <StaticImage
          src="../assets/Images/inflection.png"
          alt="inflection"
          width={125}
          height={100}
        />
        <StaticImage
          src="../assets/Images/iSeed.png"
          alt="iSeed"
          width={109}
          height={64}
        />
        <StaticImage
          src="../assets/Images/perpetualValue.png"
          alt="perpetualValue"
          width={182}
          height={64}
        />
        <StaticImage
          src="../assets/Images/rise.png"
          alt="rise"
          width={120}
          height={121}
        />
        <StaticImage
          src="../assets/Images/tribeCapital.png"
          alt="tribeCapital"
          width={236}
          height={24}
        />
        <StaticImage
          src="../assets/Images/polygon.png"
          alt="polygon"
          width={220}
          height={40}
        />
      </PartnerCompany>

      <CompanyPerson>
        <PersonInfo>
          <StaticImage
            src="../assets/Images/UtsavSomani.png"
            alt="utsav"
            width={120}
            height={138}
          />
          <PersonName>Utsav Somani</PersonName>
        </PersonInfo>
        <PersonInfo>
          <StaticImage
            src="../assets/Images/aditya.png"
            alt="utsav"
            width={120}
            height={138}
          />
          <PersonName>
            Aditya Nagarsheth <section>Perpetual Value Partners</section>
          </PersonName>
        </PersonInfo>
        <PersonInfo>
          <StaticImage
            src="../assets/Images/gokul.png"
            alt="utsav"
            width={120}
            height={138}
          />
          <PersonName>Gokul Rajaram</PersonName>
        </PersonInfo>
        <PersonInfo>
          <StaticImage
            src="../assets/Images/sajid.png"
            alt="utsav"
            width={120}
            height={138}
          />
          <PersonName>
            Sajid Rehman <section>My Asia VC</section>
          </PersonName>
        </PersonInfo>
        <PersonInfo>
          <StaticImage
            src="../assets/Images/arjun.png"
            alt="utsav"
            width={120}
            height={138}
          />
          <PersonName>
            Arjun Sethi <section>Tribe Capital</section>
          </PersonName>
        </PersonInfo>
        <PersonInfo>
          <StaticImage
            src="../assets/Images/kunal.png"
            alt="utsav"
            width={120}
            height={138}
          />
          <PersonName>Kunal Shah</PersonName>
        </PersonInfo>
        <PersonInfo>
          <StaticImage
            src="../assets/Images/sandeep.png"
            alt="utsav"
            width={120}
            height={138}
          />
          <PersonName>
            Sandeep Nailawal <section>Polygon Labs</section>{" "}
          </PersonName>
        </PersonInfo>
        <PersonInfo>
          <StaticImage
            src="../assets/Images/karn.png"
            alt="utsav"
            width={120}
            height={138}
          />
          <PersonName>Karn Vivek Nagpal</PersonName>
        </PersonInfo>
      </CompanyPerson>
    </PartnershipLayout>
  );
};

export default Partnership;
