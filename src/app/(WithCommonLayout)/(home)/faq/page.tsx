import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'
import FaqBanner from '@/components/faq/faq';

const page = () => {
    return (
        <div>
            <section className="mb-12">
                <FaqBanner />
                <div className="container justify-between gap-4 mt-20">
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">How do I find a tutor on your platform?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    You can search for tutors based on subject, location, availability, and more using our search filters. Simply enter your criteria and browse through the available tutors.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">What subjects do your tutors cover?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    Our tutors cover a wide range of subjects including math, science, languages, test preparation, and more. You can find tutors for elementary school through college-level courses.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">How do I know if a tutor is qualified?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    All tutors on our platform undergo a rigorous verification process to ensure they have the necessary qualifications and experience. You can view tutor profiles, which include their qualifications, teaching experience, and student reviews.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">Can I schedule sessions with tutors at a convenient time?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    Yes, you can coordinate session times directly with tutors based on mutual availability. Our platform allows for easy scheduling and rescheduling of sessions.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">What if I&apos;m not satisfied with a tutor?
                                </AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    If you&apos;re not satisfied with a tutor for any reason, you can request a different tutor or receive a refund for the session. We strive to match you with the best tutor for your needs.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">Is online tutoring effective?
                                </AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    Online tutoring has proven to be highly effective for many students. Our platform offers interactive tools, virtual classrooms, and personalized learning experiences to enhance the tutoring process.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">How do I pay for tutoring sessions?
                                </AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    Payments are handled securely through our platform. You can choose from various payment methods and pay for sessions on a per-session basis or in advance packages.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">Are there any discounts or promotions available?
                                </AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    We periodically offer discounts and promotions on tutoring sessions and packages. Keep an eye on our website or subscribe to our newsletter for updates.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default page
