import Featured from "../Featured/Featured";
import SectionTitle from "../SectionTitle/SectionTitle";


export default function HA_OurFeaturesSection () {
  return (
    <div>
      <SectionTitle
        titlewhite="Our"
        titlegreen=" Features"
        paragraph="Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience"
        filter={false}
        widthtitle={1296}
      />
      <Featured />
    </div>
  );
};
