import Link from 'next/link';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section>
      <div className="relative isolate pt-14 lg:px-8">
        <div className="max-w-2xl py-16 mx-auto">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 text-sm leading-6 rounded-md ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Introducion.{' '}
              <a href="#" className="font-semibold textGradient">
                <span className="absolute inset-0" aria-hidden="true" />
                Watch video <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight font-amiko sm:text-6xl">
              Resources for your next big things
            </h1>

            <p className="mt-6 text-lg leading-6 text-gray-600 font-poppins">
              Copy and paste modern and beautiful sections into your own project
              with customizable content
            </p>

            <div className="flex items-center justify-center mt-10 gap-x-6">
              <Link
                href={'/components'}
                className={cn(buttonVariants({ variant: 'default' }))}
              >
                Get started
              </Link>

              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'text-sm font-semibold leading-6 text-gray-900',
                )}
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
