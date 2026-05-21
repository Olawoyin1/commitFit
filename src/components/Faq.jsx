import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      q: "Will I be charged immediately if I miss a session?",
      a: "Yes. Once your scheduled check-in window closes without a GPS-verified check-in, your card on file is automatically charged the penalty amount you selected."
    },
    {
      q: "What if GPS fails or I can't check in?",
      a: "The app requires location access to verify. If technical issues prevent check-in, you can dispute the charge within 24 hours. We review GPs logs and connectivity issues to resolve disputes."
    },
    {
      q: "Can I dispute a charge?",
      a: "Yes, because legitimate emergencies happen. You have a 24-hour window to dispute a charge if you face a genuine, verifiable issue. However, common excuses like 'I was tired' or 'traffic was heavy' do not qualify for a refund and will be rejected."
    },
    {
      q: "How does gym check-in verification work?",
      a: "You set your gym's location in the app. When you arrive during your scheduled window, open the app and tap check-in. We verify your coordinates against the gym's location."
    },
    {
      q: "Is my payment information secure?",
      a: "Absolutely. We use Paystack for all payment processing. We do not store your credit card information directly on our servers."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-surface">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          <div className="lg:w-1/3">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
              Got Questions?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've anticipated the excuses. Here is exactly how the system works and why there are completely no loopholes.
            </p>
          </div>

          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
