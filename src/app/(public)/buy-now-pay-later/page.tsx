import AfterPurchase from "@/components/buy-now-pay-later/AfterPurchase";
import Eligibility from "@/components/buy-now-pay-later/Eligibility";
import FAQ from "@/components/buy-now-pay-later/FAQ";
import Hero from "@/components/buy-now-pay-later/hero";
import HeroBuyNowPayLater from "@/components/buy-now-pay-later/HeroBuyNowPayLater";
import HowItWorks from "@/components/buy-now-pay-later/HowItWorks";
import PaymentFlow from "@/components/buy-now-pay-later/PaymentFlow";
import PaymentTerms from "@/components/buy-now-pay-later/PaymentTerms";

export default function BuyNowPayLater() {
    return (<>
        {/* <Hero /> */}
        <HeroBuyNowPayLater />
        <HowItWorks />
        <PaymentTerms />
        <AfterPurchase />
        {/* <PaymentFlow /> */}
        {/* <Eligibility /> */}
        {/* <FAQ /> */}
    </>)
}