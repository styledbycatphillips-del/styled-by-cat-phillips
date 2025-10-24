"use client"

import { Disclosure } from '@headlessui/react'
import { Children, isValidElement, ReactNode } from 'react'

type AccordionProps = {
  children: ReactNode
  className?: string
}

export function Accordion({ children, className }: AccordionProps) {
  return <div className={className}>{children}</div>
}

type AccordionItemProps = {
  value?: string
  children: ReactNode
}

export function AccordionItem({ children }: AccordionItemProps) {
  const kids = Children.toArray(children)
  const triggerEl = kids.find(
    (child: any) => isValidElement(child) && (child.type as any).displayName === 'AccordionTrigger'
  ) as any
  const contentEl = kids.find(
    (child: any) => isValidElement(child) && (child.type as any).displayName === 'AccordionContent'
  ) as any

  const triggerContent = triggerEl?.props?.children ?? kids[0]
  const panelContent = contentEl?.props?.children ?? kids[1]

  return (
    <Disclosure>
      {({ open }) => (
        <div className="border-b border-signature-gray/30 py-3">
          <Disclosure.Button className="flex w-full items-center justify-between py-2 text-left font-medium text-signature-black hover:text-signature-navy">
            <span>{triggerContent}</span>
            <svg
              className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="pt-2 text-sm leading-relaxed text-signature-navy">
            {panelContent}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export function AccordionTrigger({ children }: { children: ReactNode }) {
  return <>{children}</>
}
AccordionTrigger.displayName = 'AccordionTrigger'

export function AccordionContent({ children }: { children: ReactNode }) {
  return <>{children}</>
}
AccordionContent.displayName = 'AccordionContent'

