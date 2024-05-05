import { useCallback } from "react";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import Image from "next/image";

interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorders?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
    userId,
    isLarge,
    hasBorders
}) => {
  const {data: fetchedUser} = useUser('65ee5d3f5cf5436698d4b602');
  const router = useRouter()
  
  const onClick = useCallback((event:any) => {
    event.stopPropagation()
    const url = `/user/{userId}`;

    router.push(url)
  },[router,userId])

  return (
    <div className={`${hasBorders ? 'border-4 border-black': ""}
      ${isLarge ? 'h-32': "h-12"}
      ${isLarge ? 'w-32': "w-12"}
      rounded-full
      hover:opacity-90
      transition
      cursor-pointer
      relative`
      }>
        <Image
          fill
          style={{
            objectFit: 'cover',
            borderRadius: '100%',
          }}
          alt="avatar"
          onClick={onClick}
          src={fetchedUser?.profileImage || 'https://fakeimg.pl/250x100/'}
        />
    </div>
  )
}

export default Avatar