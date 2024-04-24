import { buttonVariants } from "@/components/ui/button"
import Icon from "@/components/icon"
import { arrayLinksButtons } from "../utils/arrayLinksButtons"

function Buttons() {
  return (
    <>
      {arrayLinksButtons.map((linkButton) => {
        return (
          <a 
            key={linkButton.text}
            href={linkButton.siteUrl} 
            target="_blank" 
            className={buttonVariants({ variant: "default" })}>
            <Icon 
              alt={linkButton.text}
              src={linkButton.srcUrl}
            />
            {linkButton.text}
          </a>
        );
      })}
    </>
  );
}

export default Buttons