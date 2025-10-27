import { useEffect, useState } from 'react'

import Vapi from '@vapi-ai/web'

interface TranscriptMessage {
  role: 'user' | 'assistant'
  text: string
}

export function useVapi() {
  const [vapi, setVapi] = useState<Vapi | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([])

  useEffect(() => {
    //只为测试Vapi API,否则客户需要提供自己的api key
    const vapiInstance = new Vapi('212e4246-1c45-4004-9eb7-9ecf6174f856')
    setVapi(vapiInstance)
    vapiInstance.on('call-start', () => {
      setIsConnected(true)
      setIsConnecting(false)
      setTranscript([])
    })

    vapiInstance.on('call-end', () => {
      setIsConnected(false)
      setIsConnecting(false)
      setIsSpeaking(false)
    })

    vapiInstance.on('speech-end', () => {
      setIsSpeaking(false)
    })

    vapiInstance.on('error', (error) => {
      console.log(error, 'VAPI_ERROR')
      setIsSpeaking(false)
    })

    vapiInstance.on('message', (message) => {
      if (message.type == 'transcript' && message.transcriptType == 'final') {
        setTranscript((prev) => [
          ...prev,
          {
            role: message.role == 'user' ? 'user' : 'assistant',
            text: message.transcript,
          },
        ])
      }
    })
    return function () {
      vapiInstance?.stop()
    }
  }, [])

  const startCall = () => {
    setIsConnecting(true)
    if (vapi) {
      //只为测试Vapi API,否则客户需要提供自己的api key
      vapi.start('61129105-8134-4809-a672-25ba6e6fd9fd')
    }
  }
  const endCall = () => {
    if (vapi) {
      vapi.stop()
    }
  }
  return {
    isSpeaking,
    isConnected,
    isConnecting,
    transcript,
    startCall,
    endCall,
  }
}
