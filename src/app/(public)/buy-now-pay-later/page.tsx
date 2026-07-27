import AfterPurchase from "@/components/buy-now-pay-later/AfterPurchase";
import Eligibility from "@/components/buy-now-pay-later/Eligibility";
import Hero from "@/components/buy-now-pay-later/hero";
import PaymentFlow from "@/components/buy-now-pay-later/PaymentFlow";
import PaymentTerms from "@/components/buy-now-pay-later/PaymentTerms";

export default function BuyNowPayLater() {
    return (<>
        <Hero />
        {/* <HowItWorks /> */}
        <PaymentTerms />
        <AfterPurchase />
        <PaymentFlow />
        <Eligibility />
        {/* <FAQ /> */}
    </>)
}