'use client'
import { Button } from '@workspace/ui/components/button'

import { useVapi } from '@/modules/widget/hooks/use-vapi'

export default function Page() {
  const {
    isConnected,
    isConnecting,
    isSpeaking,
    transcript,
    startCall,
    endCall,
  } = useVapi()
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <Button onClick={() => startCall()}>Start call</Button>
        <Button onClick={() => endCall()} variant="destructive">
          End call
        </Button>
        <p>isConnected: {isConnected + ''}</p>
        <p>isConnecting: {isConnecting + ''}</p>{' '}
        <p>isSpeaking: {isSpeaking + ''}</p>
        <pre>{JSON.stringify(transcript, null, 2)}</pre>
      </div>
    </div>
  )
}
