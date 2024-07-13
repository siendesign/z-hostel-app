import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface User {
  id: number
  name: string
  image: string
  qualities: string
  room: any,
  gender: string,
  school: string,
  program: string,
  level: string,
}

interface UserCardProps {
  user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card className="w-[350px]">
        {JSON.stringify(user)}
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={user?.image} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{user.name}</CardTitle>
            <CardDescription>{user.school}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{user.school}</p>
        {/* Add more user details here as needed */}
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Edit Profile</Button>
        <Button>View Details</Button>
      </CardFooter> */}
    </Card>
  )
}

export default UserCard 