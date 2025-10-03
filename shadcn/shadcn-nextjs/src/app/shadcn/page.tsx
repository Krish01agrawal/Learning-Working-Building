import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

function accord() {
    const faq = [
            {
                question: "Is it accessible?",
                answer: "Yes. It adheres to the WAI-ARIA design 1 pattern."
            },
            {
                question: "Is it accessible?",
                answer: "Yes. It adheres to the WAI-ARIA design 2 pattern."
            },
            {
                question: "Is it accessible?",
                answer: "Yes. It adheres to the WAI-ARIA design 3 pattern."
            }
        ]
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 flex flex-col gap-3">
        <h1>Hello there, We will now be practicing with the accordion component</h1>
        {faq.map((item) => (   
                    <>
            <Accordion type="single" collapsible className="bg-blue-500 rounded-md w-80">
                    <AccordionItem value="item-1" className="bg-blue-500 rounded-md w-80 items-center justify-center flex gap-4 flex-col cursor-pointer hover:bg-blue-800">
                        
                                <AccordionTrigger key={item.question}>{item.question}</AccordionTrigger>
                                <AccordionContent key={item.answer}>{item.answer}</AccordionContent>
                            
                    </AccordionItem>
                    
                    {/* <AccordionContent>
                    {item.answer}
                    </AccordionContent> */}
                {/* </AccordionItem> */}
            </Accordion>
        </>
        ))}
        <AlertDialog>
            <AlertDialogTrigger>Open</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>

    
  )
}

export default accord