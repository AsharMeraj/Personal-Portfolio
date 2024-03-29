import { Quicksand } from "next/font/google";

type PropType = {
    size: number
}
const light = Quicksand({
    subsets: ["latin"],
    weight: ["600"]

})

const bold = Quicksand({
    subsets: ["latin"],
    weight: ["700"]

})


const LightFont = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className={light.className}>
        {children}
    </span>
  )
}

export const BoldFont = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className={bold.className}>
        {children}
    </span>
  )
}

export default LightFont