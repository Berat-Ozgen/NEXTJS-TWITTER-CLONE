import Image from 'next/image'
import Avatar from '../Avatar'
import useUser from '../../hooks/useUser';

interface UserHeroProps {
    userId: string;
}

const UserHero:React.FC<UserHeroProps> = ({userId}) => {
    const {data: fetchedUser} = useUser(userId)
    return (
       <div>
            <div className='bg-neutral-600 h-44 relative'>
                {fetchedUser?.coverImage && (
                    <Image src={fetchedUser.coverImage} 
                    fill
                    alt='cover Inage'
                    style={{objectFit: 'cover'}} />
                )}
                <div className='absolute -bottom-16 left-4'>
                    <Avatar userId={userId} isLarge hasBorders/>
                </div>
            </div>
       </div>
    )
}

export default UserHero