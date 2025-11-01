'use client'

import { useEffect } from 'react'

interface InlineValidationProps {
  formSelector?: string
  onQuizSubmit?: (data: any) => void
}

export function InlineValidation({ 
  formSelector = 'form#authority-index',
  onQuizSubmit 
}: InlineValidationProps) {
  useEffect(() => {
    const form = document.querySelector(formSelector) as HTMLFormElement
    const emailInput = form?.querySelector('input[type="email"]') as HTMLInputElement
    const roleRadios = form?.querySelectorAll('input[name="role"]') as NodeListOf<HTMLInputElement>
    const channelCbs = form?.querySelectorAll('input[name="channels"]') as NodeListOf<HTMLInputElement>
    const matrixYesNo = form?.querySelectorAll('input[name="has_matrix"]') as NodeListOf<HTMLInputElement>
    const publishYN = form?.querySelectorAll('input[name="publishes"]') as NodeListOf<HTMLInputElement>
    const complexity = form?.querySelector('select[name="complexity"]') as HTMLSelectElement
    const counterEl = document.querySelector('#channels-count')

    if (!form) return

    function countChannels() {
      return Array.from(channelCbs || []).filter(cb => cb.checked).length
    }

    function renderCount() {
      if (!counterEl) return
      const count = countChannels()
      counterEl.textContent = `${count}/4 selected`
    }

    function withinRange(n: number) { 
      return n >= 1 && n <= 4 
    }

    // Email validation on blur
    const handleEmailBlur = () => {
      const v = emailInput.value.trim()
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      emailInput.setCustomValidity(ok ? '' : 'Enter a valid work email.')
      emailInput.reportValidity()
    }

    // Channel selection with 1-4 enforcement
    const handleChannelChange = (cb: HTMLInputElement) => {
      const n = countChannels()
      // Disallow >4
      if (n > 4) {
        cb.checked = false
        return
      }
      renderCount()
    }

    // Required radio group validation
    function requireOne(nodeList: NodeListOf<HTMLInputElement>, msg: string) {
      const any = Array.from(nodeList || []).some(i => i.checked)
      if (!any) {
        // Put message on the first input
        const first = nodeList[0]
        if (first) {
          first.setCustomValidity(msg)
          first.reportValidity()
          setTimeout(() => first.setCustomValidity(''), 1000)
        }
      }
      return any
    }

    // Form submission validation
    const handleSubmit = (e: Event) => {
      // Inline checks
      const emailOK = emailInput?.checkValidity() ?? true
      const channelsOK = withinRange(countChannels())
      const roleOK = requireOne(roleRadios, 'Pick a role.')
      const matrixOK = requireOne(matrixYesNo, 'Select Yes or No.')
      const pubOK = requireOne(publishYN, 'Select Yes or No.')
      
      if (!channelsOK) {
        alert('Select between 1 and 4 channels.')
      }

      if (!(emailOK && channelsOK && roleOK && matrixOK && pubOK)) {
        e.preventDefault()
        return
      }

      // Fire GA4 quiz_submit event before scoring
      const formData = {
        role: (Array.from(roleRadios).find(r => r.checked) as HTMLInputElement)?.value || '',
        channels_count: countChannels(),
        has_matrix: (Array.from(matrixYesNo).find(r => r.checked) as HTMLInputElement)?.value === 'yes',
        publishes: (Array.from(publishYN).find(r => r.checked) as HTMLInputElement)?.value === 'yes',
        complexity: parseInt(complexity?.value || '0', 10) || 0
      }

      // Fire GA4 event
      if (typeof window !== 'undefined' && (window as any).fireQuizSubmit) {
        (window as any).fireQuizSubmit(formData)
      }

      // Call custom handler if provided
      if (onQuizSubmit) {
        onQuizSubmit(formData)
      }
    }

    // Attach event listeners
    if (emailInput) {
      emailInput.addEventListener('blur', handleEmailBlur)
    }

    channelCbs?.forEach(cb => {
      cb.addEventListener('change', () => handleChannelChange(cb))
    })

    if (form) {
      form.addEventListener('submit', handleSubmit)
    }

    // Initial render
    renderCount()

    // Cleanup
    return () => {
      if (emailInput) {
        emailInput.removeEventListener('blur', handleEmailBlur)
      }
      
      channelCbs?.forEach(cb => {
        cb.removeEventListener('change', () => handleChannelChange(cb))
      })

      if (form) {
        form.removeEventListener('submit', handleSubmit)
      }
    }
  }, [formSelector, onQuizSubmit])

  return null
}