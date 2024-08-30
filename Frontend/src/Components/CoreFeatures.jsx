import CoreFeaturesDescription from "./CoreFeaturesDescription";
import FeatureCard from "./FeatureCard";

export default function CoreFeatures() {
  return (
    <div className="flex gap-20 justify-center items-center my-10">
        <div className="flex gap-11">
            <div className="flex flex-col gap-11 pt-28">
                <FeatureCard number="80K+" feature="We have more than students" color='#EF9E48'></FeatureCard>
                <FeatureCard number="90+" feature="Daily updated blog post maintain" color='#FA578E'></FeatureCard>
            </div>
            <div className="flex flex-col gap-11">
                <FeatureCard number="150+" feature="Free online tutorials videos avaialblbe" color='#FF753A'></FeatureCard>
                <FeatureCard number="& 3M" feature="Job posted everydays with qualification" color='#E682FF'></FeatureCard>
            </div>
        </div>
        <CoreFeaturesDescription></CoreFeaturesDescription>
    </div>
  );
}