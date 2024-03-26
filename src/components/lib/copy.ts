import { toast } from "sonner"

function copy (text: string) {
  navigator.clipboard.writeText(text)
  toast.success('Password copied to clipboard')
}

export default copy
