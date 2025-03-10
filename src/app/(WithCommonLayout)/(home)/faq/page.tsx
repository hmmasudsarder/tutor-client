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
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">What is Mytel?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    Mytel is a telecommunications application developed by Silicornya Limited, allowing
                                    users to manage and recharge their SIM cards conveniently through a single platform.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">How do I recharge my SIM cards using Mytel?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    To recharge your SIM cards, simply download the Mytel app, log in, and follow the
                                    instructions provided in the recharge section to top up your balance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">Can I recharge multiple SIM cards from different providers using Mytel?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    Yes, Mytel allows users to recharge SIM cards from various providers through the app,
                                    providing a convenient and centralized solution.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">What is the Powerload service offered by Mytel?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    The Powerload service is a feature of Mytel that enables users to recharge their SIM
                                    cards directly from the app, eliminating the need for physical recharge vouchers or visiting
                                    retail outlets.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">Is Mytel available for both Android and iOS devices?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    Yes, Mytel is available for download on both Android and iOS devices, providing flexibility
                                    for users across different platforms.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">How secure is Mytel in terms of protecting user information?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    Mytel implements industry-standard security measures to protect user data, including
                                    encryption and secure authentication protocols, ensuring the confidentiality and integrity of
                                    user information.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">What should I do if I encounter any issues or have questions about Mytel?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    If you encounter any issues or have questions about Mytel, you can reach out to our
                                    customer support team for assistance. Contact information is available within the app for
                                    your convenience.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">Can I use Mytel to transfer balance or data between SIM cards?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    At the moment, Mytel does not support balance or data transfer between SIM cards.
                                    However, we are continuously working to enhance our services, and we appreciate your
                                    feedback for future improvements.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-9">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">Are there any fees associated with using Mytel?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    Mytel is free to download and use. However, standard data charges may apply based on
                                    your mobile data plan when using the app for recharge or other transactions.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-10">
                                <AccordionTrigger className="text-[18px] font-bold coursor-pointer">How frequently does Mytel update its services and features?</AccordionTrigger>
                                <AccordionContent className="text-[16px ]">
                                    Mytel strives to provide regular updates to improve user experience and introduce new
                                    features. Users are encouraged to enable automatic updates or check for updates
                                    periodically to access the latest enhancements.
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
