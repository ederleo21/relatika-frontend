import { ActionPanel } from "../../../global/components/layout/ActionPanel"
import { PageWrapper } from "../../../global/components/layout/PageWrapper"
import ThreeColumnsLayout from "../../../global/components/layout/ThreeColumnsLayout"
import { PostFeed } from "../../posts/components/PostFeed"

export const HomePage = () => {

  return (
      <PageWrapper>
          <ThreeColumnsLayout>

            <ThreeColumnsLayout.Left>
              <h2 className="text-lg font-bold mb-2">Perfil</h2>
              <p>Información del usuario...</p>
            </ThreeColumnsLayout.Left>

            <ThreeColumnsLayout.Center>
              <PostFeed/>
            </ThreeColumnsLayout.Center>

            <ThreeColumnsLayout.Right>
              <ActionPanel/>
            </ThreeColumnsLayout.Right>
            
          </ThreeColumnsLayout>
      </PageWrapper>
  )
}