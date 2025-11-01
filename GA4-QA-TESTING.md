# 🎯 GA4 Drop-In Code QA Testing Guide

## ✅ Quick QA Grid - Run After Deploy

### 1. Form Validation Testing
**Channels Counter & Validation**
- [ ] Channels counter blocks selection of 0 channels (shows error)
- [ ] Channels counter blocks selection of >4 channels (prevents checking 5th box)
- [ ] Inline count updates live: shows "X/4 selected" 
- [ ] Counter element ID `#channels-count` exists and updates

**Email Validation**
- [ ] Email errors show on blur with invalid format
- [ ] Email errors show on submit with invalid format  
- [ ] Personal domains (gmail.com, yahoo.com) blocked with helpful message
- [ ] Valid work emails pass validation

**Required Field Validation**
- [ ] Role selection required - shows error if none selected
- [ ] Matrix Yes/No required - shows error if none selected
- [ ] Publishing Yes/No required - shows error if none selected
- [ ] Form submits only when all required fields valid

### 2. GA4 Event Tracking Verification

**Quiz Flow Events** (Check in GA4 Real-Time or browser dev tools)
- [ ] `quiz_start` fires on page load with UTM parameters
- [ ] `quiz_submit` fires on form submission with form data:
  ```javascript
  {
    role: "Executive|Director|Manager",
    channels_count: 1-4,
    has_matrix: true|false, 
    publishes: true|false,
    complexity: 0-3,
    utm_source: "...",
    utm_medium: "...", 
    utm_campaign: "..."
  }
  ```
- [ ] `quiz_scored` fires on success page load:
  ```javascript
  {
    score: 0-100,
    band: "Emerging|Practicing|Consistent",
    utm_source: "...",
    utm_medium: "...",
    utm_campaign: "..."
  }
  ```

**Success Page CTA Events**
- [ ] `cta_click` fires for "Book an Executive Audit" with `cta: "book_audit"`
- [ ] `cta_click` fires for "Contact / Quick intake" with `cta: "contact"`
- [ ] `cta_click` fires for "Retake the quiz" with `cta: "retake_quiz"`
- [ ] All CTA events include `page: "success"` and UTM parameters

**Audit Booking Conversion**
- [ ] `audit_booked` fires when audit is actually completed with `source` parameter

### 3. UTM Parameter Preservation

**UTM Carry-Forward Testing**
- [ ] Test URL: `/quiz?utm_source=linkedin&utm_medium=social&utm_campaign=q4_executive`
- [ ] UTM parameters preserved in quiz_start event
- [ ] UTM parameters preserved in quiz_submit event  
- [ ] UTM parameters preserved in quiz_scored event
- [ ] UTM parameters passed to success page CTAs (check href attributes)
- [ ] Links with `js-utm` class automatically get UTM parameters added

### 4. WCAG Focus Visible Compliance

**Accessibility Testing**
- [ ] Focus outline visible on all interactive elements (2px solid Navy #0F172A)
- [ ] Tab navigation works through entire form
- [ ] Focus states meet 4.5:1 contrast ratio requirements
- [ ] All form elements have proper labels and ARIA attributes
- [ ] Radio button groups use fieldset/legend structure

### 5. JSON-LD Schema Validation

**Structured Data Testing** (Use Google's Rich Results Test)
- [ ] Organization schema present and valid
- [ ] WebSite schema present and valid  
- [ ] Schema includes proper contact information
- [ ] Logo URL resolves correctly

### 6. Performance & Error Handling

**Browser Compatibility**
- [ ] Works in Chrome (latest)
- [ ] Works in Safari (latest) 
- [ ] Works in Firefox (latest)
- [ ] Works in Edge (latest)
- [ ] Mobile responsive on iOS Safari
- [ ] Mobile responsive on Chrome Android

**Error Resilience**
- [ ] GA4 events fail gracefully if gtag not loaded
- [ ] Form validation works without JavaScript
- [ ] UTM preservation works with malformed URLs
- [ ] No console errors in browser developer tools

## 🔧 Development Testing Commands

```bash
# Test scoring algorithm
node scoring-test.js

# Run comprehensive QA suite  
node qa-test-suite.js

# Build verification
npm run build

# Start development server
npm run dev
```

## 📊 GA4 Verification Steps

### 1. Real-Time Testing
1. Open GA4 → Reports → Real-time
2. Navigate to `/quiz?utm_source=test&utm_medium=email&utm_campaign=qa`
3. Complete quiz flow and verify events appear
4. Check event parameters in detail view

### 2. Custom Event Parameters
Verify these custom parameters are captured:
- `utm_source`, `utm_medium`, `utm_campaign`
- `role`, `channels_count`, `has_matrix`, `publishes`, `complexity`
- `score`, `band`, `page`, `cta`, `source`

### 3. Conversion Tracking Setup
- Configure `quiz_scored` as conversion event (Value: $5)
- Configure `audit_booked` as conversion event (Value: $25)
- Set up custom dimensions for `authority_band` and `quiz_score`

## 🎯 Success Criteria

### ✅ Must-Pass Checklist
- [ ] All 5 GA4 events fire correctly with proper parameters
- [ ] UTM parameters preserved through entire funnel
- [ ] Form validation prevents invalid submissions  
- [ ] Accessibility compliance (WCAG 2.1 AA)
- [ ] No JavaScript errors in any browser
- [ ] Mobile-responsive experience
- [ ] Schema markup validates

### 🚨 Critical Issues (Stop Deployment)
- GA4 events not firing
- UTM parameters lost in funnel
- Form allows invalid submissions
- Focus states not visible
- Console errors breaking functionality

### ⚠️ Minor Issues (Fix After Deploy)
- Styling inconsistencies
- Performance optimizations needed
- Analytics parameter naming improvements

## 🔍 Manual Testing Scenarios

### Test Case 1: Happy Path
1. Visit `/quiz?utm_source=linkedin&utm_medium=social&utm_campaign=q4`
2. Fill form: Executive, 3 channels, Yes matrix, Yes publishing, Multi-team
3. Submit and verify score calculation
4. Click "Book Executive Audit" and verify UTM carry-forward

### Test Case 2: Validation Path  
1. Visit `/quiz` (no UTMs)
2. Try submitting empty form - verify all validation errors
3. Enter personal email (gmail.com) - verify blocked
4. Select 5 channels - verify 5th channel prevented
5. Complete valid form and proceed

### Test Case 3: Error Resilience
1. Block GA4 scripts in browser
2. Complete quiz flow - verify no console errors
3. Verify fallback analytics still work
4. Test with slow network connection

---

**QA Sign-off**: All tests passing = ✅ Ready for production deployment with full GA4 analytics and WCAG compliance!