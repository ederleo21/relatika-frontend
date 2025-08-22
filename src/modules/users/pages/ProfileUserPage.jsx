import { ProfileHeader } from '../components/ProfileHeader'
import { PageWrapper } from '../../../global/components/layout/PageWrapper'
import ThreeColumnsLayout from '../../../global/components/layout/ThreeColumnsLayout'
import { ActionPanel } from '../../../global/components/layout/ActionPanel'

export const ProfileUserPage = () => {

  return (
    <PageWrapper>
          <ProfileHeader/>
          <ThreeColumnsLayout>

            <ThreeColumnsLayout.Left>
              <h2 className="text-lg font-bold mb-2">Perfil</h2>
              <p>Información del usuario...</p>
            </ThreeColumnsLayout.Left>

            <ThreeColumnsLayout.Center>
              <h2 className="text-lg font-bold mb-2">Feed</h2>
              <div className="space-y-3">
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded">Post 2</div>
              </div>
            </ThreeColumnsLayout.Center>

            <ThreeColumnsLayout.Right>
                <ActionPanel/>
            </ThreeColumnsLayout.Right>

          </ThreeColumnsLayout>
    </PageWrapper>
  )
}
