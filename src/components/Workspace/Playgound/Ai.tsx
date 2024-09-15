// import { Problem } from '@/utils/types/problem';
// import { useChat } from 'ai/react';
// import { useEffect, useState } from 'react';
// import { ScrollArea } from "@/components/ui/scroll-area"


// export default function Ai({ problem, userCode }:{problem:Problem,userCode:string}) {

//   const { messages, input, handleInputChange, handleSubmit, data } = useChat({ initialMessages: [{id:"a;jkdf",role: "system",content: `
//     You're an AI assistant who answers questions about data structures and algorithms and coding problems.

//     you use javascript.
//     You're a chat bot, so keep your replies succinct.

//     If the question isn't related to these coding, say:
//     "Sorry, I couldn't find any information on that.

//     this is the problem title:
//     ${problem.title}
//     this is the problem statement: ${problem.problemStatement}
//     this is the usercode 
//     ${userCode}

//     Do not go off topic.

//   `}],initialInput:"",});

//   const [state, setState]= useState(0)
//   useEffect(() => {
//     if(state == 0 ){
//     handleSubmit();
//     setState(1)
//     }
//   }, []);

//   return (
//     <div className="flex flex-col h-[calc(100vh-94px)] w-full max-w-md py-24 mx-auto stretch">
//           <ScrollArea className="h-full">

        
//           {messages.map(m => (
//               m.role != 'system' ?
//               <div key={m.id} className="whitespace-pre-wrap">
//                       {m.role === 'user' ? 'User: ' : 'AI: '}
//                       {m.content}
//                   </div> : null
//           ))}

//           </ScrollArea>
//       <form onSubmit={handleSubmit}>
//         <input
//           className="absolute bottom-10 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
//           value={input}
//           placeholder="Say something..."
//           onChange={handleInputChange}
//         />
//       </form>
//     </div>
//   );
// }



// import { useState, useRef, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Send, Bot } from "lucide-react"
// import { Problem } from '@/utils/types/problem';
// import { useChat } from 'ai/react';


// type Message = {
//   role: "user" | "assistant" | "system",
//   content: string
// }

// export default function Ai({ problem, userCode }:{problem:Problem,userCode:string}) {
//   const scrollAreaRef = useRef<HTMLDivElement>(null)
//   const [option,setoption]=useState("")

//   const { messages, input, handleInputChange, handleSubmit, data } = useChat({ initialMessages: [{id:"a;jkdf",role: "system",content: `
//     You're an AI assistant who answers questions about data structures and algorithms and coding problems.

//     you use javascript.
//     You're a chat bot, so keep your replies succinct.

//     If the question isn't related to these coding, say:
//     "Sorry, I couldn't find any information on that.

//     this is the problem title:
//     ${problem.title}
//     this is the problem statement: ${problem.problemStatement}
//     this is the usercode 
//     ${userCode}

//     Do not go off topic.

//   `}],initialInput:option,});

//   useEffect(() => {
//     handleSubmit();
//   }, [option]);

//   // const handleSendMessage = (content: string) => {
//   //   const newMessage: Message = { role: "user", content }
//   //   setMessages((prevMessages) => [...prevMessages, newMessage])
//   //   // Here you would typically send the message to your AI backend
//   //   // and then add the AI's response to the messages
//   //   // For this example, we'll just echo the message as the AI response
//   //   setTimeout(() => {
//   //     const aiResponse: Message = {
//   //       role: "assistant",
//   //       content: `You asked: "${content}". This is where the AI response would go.`,
//   //     }
//   //     setMessages((prevMessages) => [...prevMessages, aiResponse])
//   //   }, 1000)
//   // }

//   // const option = (option: string) => {
//   //   handleSendMessage(option)
//   // }

//   // const handleSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault()
//   //   if (input.trim()) {
//   //     handleSendMessage(input)
//   //     setInput("")
//   //   }
//   // }

//   useEffect(() => {
//     if (scrollAreaRef.current) {
//       scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
//     }
//   }, [messages])

//   return (
//     <div className="flex flex-col h-[calc(100vh-94px)] max-w-3xl mx-auto bg-background">
//       <div className="flex-1 overflow-hidden">
//         <ScrollArea ref={scrollAreaRef} className="h-full">
//           {messages.length === 1 ? (
//             <div className="flex flex-col items-center justify-center h-full text-center p-4">
//               <Bot className="w-16 h-16 mb-4 text-primary" />
//               <h1 className="text-2xl font-bold mb-2">Welcome to AI Chatbot</h1>
//               <p className="text-muted-foreground mb-4">
//                 How can I help you with this problem? You can start by selecting one of the options below or type your own question.
//               </p>
//               <div className="flex flex-wrap justify-center gap-2">
//                 <Button 
//                   onClick={() => setoption("Explain question")}
//                   variant="outline"
//                   className="min-w-[120px]"
//                 >
//                   Explain question
//                 </Button>
//                 <Button 
//                   onClick={() => setoption("Explain answer")}
//                   variant="outline"
//                   className="min-w-[120px]"
//                 >
//                   Explain answer
//                 </Button>
//                 <Button 
//                   onClick={() => setoption("Give hint")}
//                   variant="outline"
//                   className="min-w-[120px]"
//                 >
//                   Give hint
//                 </Button>
//                 <Button 
//                   onClick={() => setoption("Find error")}
//                   variant="outline"
//                   className="min-w-[120px]"
//                 >
//                   Find error
//                 </Button>
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col gap-4 p-4">
//               {messages.map((message, index) => (
//                   message.role != 'system' ?
//                 <div
//                   key={index}
//                   className={`flex ${
//                     message.role === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <div
//                     className={`rounded-lg p-4 max-w-[80%] ${
//                       message.role === "user"
//                         ? "bg-primary text-primary-foreground"
//                         : "bg-muted"
//                     }`}
//                   >
//                     {message.content}
//                   </div>
//                 </div>: null
//               ))}
//             </div>
//           )}
//         </ScrollArea>
//       </div>
//       <div className="border-t">
//         {messages.length > 1 && (
//           <div className="flex flex-wrap gap-2 p-4">
//             <Button 
//               onClick={() => setoption("Explain question")}
//               variant="outline"
//               className="flex-1 min-w-[120px]"
//             >
//               Explain question
//             </Button>
//             <Button 
//               onClick={() => setoption("Explain answer")}
//               variant="outline"
//               className="flex-1 min-w-[120px]"
//             >
//               Explain answer
//             </Button>
//             <Button 
//               onClick={() => setoption("Give hint")}
//               variant="outline"
//               className="flex-1 min-w-[120px]"
//             >
//               Give hint
//             </Button>
//             <Button 
//               onClick={() => setoption("Find error")}
//               variant="outline"
//               className="flex-1 min-w-[120px]"
//             >
//               Find error
//             </Button>
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4">
//           <Input
//             type="text"
//             value={input}
//             onChange={handleInputChange}
//             placeholder="Type your message..."
//             className="flex-grow"
//           />
//           <Button type="submit" size="icon">
//             <Send className="h-4 w-4" />
//             <span className="sr-only">Send message</span>
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot } from "lucide-react"
import { useChat } from 'ai/react'
import { Problem } from '@/utils/types/problem'

type Message = {
  role: "user" | "assistant" | "system"
  content: string
  id: string
}

export default function AIChatbot({ problem, userCode }: { problem: Problem, userCode: string }) {
  const [selectedOption, setSelectedOption] = useState("")
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit: aiHandleSubmit } = useChat({
    initialMessages: [{
      id: "system-1",
      role: "system",
      content: `
        You're an AI assistant who answers questions about data structures and algorithms and coding problems.

        you use javascript.
        You're a chat bot, so keep your replies succinct.

        If the question isn't related to these coding, say:
        "Sorry, I couldn't find any information on that.

        this is the problem title:
        ${problem.title}
        this is the problem statement: ${problem.problemStatement}
        this is the usercode 
        ${userCode}

        Do not go off topic.
      `
    }],
    initialInput: selectedOption,
  })

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    handleInputChange({ target: { value: option } } as React.ChangeEvent<HTMLInputElement>)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      aiHandleSubmit(e)
      setSelectedOption("")
    }
  }

  useEffect(() => {
    aiHandleSubmit();
      }, [selectedOption]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="flex flex-col h-[calc(100vh-98px)] max-w-3xl mx-auto bg-background">
      <div className="flex-1 overflow-hidden">
        <ScrollArea ref={scrollAreaRef} className="h-full">
          {messages.length <= 1 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <Bot className="w-16 h-16 mb-4 text-primary" />
              <h1 className="text-2xl font-bold mb-2">Welcome to AI Chatbot</h1>
              <p className="text-muted-foreground mb-4">
                How can I help you with this problem? You can start by selecting one of the options below or type your own question.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Button 
                  onClick={() => handleOptionClick("Explain question")}
                  variant="outline"
                  className="min-w-[120px]"
                >
                  Explain question
                </Button>
                <Button 
                  onClick={() => handleOptionClick("Explain answer")}
                  variant="outline"
                  className="min-w-[120px]"
                >
                  Explain answer
                </Button>
                <Button 
                  onClick={() => handleOptionClick("Give hint")}
                  variant="outline"
                  className="min-w-[120px]"
                >
                  Give hint
                </Button>
                <Button 
                  onClick={() => handleOptionClick("Find error")}
                  variant="outline"
                  className="min-w-[120px]"
                >
                  Find error
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 p-4">
              {messages.map((message, index) => (
                message.role !== 'system' && (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-lg p-4 max-w-[80%] ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                )
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
      <div className="border-t">
        {messages.length > 1 && (
          <div className="flex flex-wrap gap-2 p-4">
            <Button 
              onClick={() => handleOptionClick("Explain question")}
              variant="outline"
              className="flex-1 min-w-[120px]"
            >
              Explain question
            </Button>
            <Button 
              onClick={() => handleOptionClick("Explain answer")}
              variant="outline"
              className="flex-1 min-w-[120px]"
            >
              Explain answer
            </Button>
            <Button 
              onClick={() => handleOptionClick("Give hint")}
              variant="outline"
              className="flex-1 min-w-[120px]"
            >
              Give hint
            </Button>
            <Button 
              onClick={() => handleOptionClick("Find error")}
              variant="outline"
              className="flex-1 min-w-[120px]"
            >
              Find error
            </Button>
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 mb-10">
          <Input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  )
}