import { SignedOut, SignUpButton, SignedIn, SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignUpButton mode='modal'>Sign Up
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>
          <Button variant='destructive'>Log Out</Button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}
