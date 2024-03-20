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
  return (
    <div>Avatar</div>
  )
}

export default Avatar