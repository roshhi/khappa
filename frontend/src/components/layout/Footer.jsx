import { Github } from 'lucide-react';

export default function Footer() {
  return (
      <div className="max-w mx-auto shadow-[0_0_58px_rgba(0,0,0,0.1)] p-2 fixed bottom-0 left-0 right-0 bg-[#FEFDFF]">
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-4">
            <div className="text-sm text-gray-400 flex items-center gap-2">
                <p>Copyright</p>
              © {new Date().getFullYear()} roshhi
              <a href='https://github.com/roshhi' target='blank' className='group bg-black p-1 rounded-full text-gray-200'>
                <Github className='w-5 h-5  transition-transform duration-800 ease-out group-hover:rotate-360' />
              </a>
            </div>
          </div>
      </div>
  );
}
