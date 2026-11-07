import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica-Bold", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(40, 758, "Vastora Tech | Top 10 Agency Research & Redesign Blueprint")
            self.drawRightString(572, 758, "Internal Strategy & Team Review")
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.5)
            self.line(40, 752, 572, 752)
        
        # Footer
        self.setFont("Helvetica", 8)
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(572, 25, page_str)
        self.drawString(40, 25, "Vastora Tech Agency Redesign - Strategic Review Deck")
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(40, 34, 572, 34)
        self.restoreState()

def build_pdf(filename):
    # Total page width = 612 pt, height = 792 pt
    # Left/Right margin = 40 pt -> Printable width = 532 pt
    # Top/Bottom margin = 38 pt -> Printable height = 716 pt
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=40,
        rightMargin=40,
        topMargin=38,
        bottomMargin=38
    )
    
    styles = getSampleStyleSheet()
    
    PRIMARY = colors.HexColor("#2563eb")     # Vastora Royal Blue
    SECONDARY = colors.HexColor("#0f172a")   # Slate Dark
    MUTED = colors.HexColor("#475569")       # Cool Grey Text
    CARD_BG = colors.HexColor("#f8fafc")     # Light Card Background
    BORDER_COLOR = colors.HexColor("#cbd5e1")
    HIGHLIGHT_BG = colors.HexColor("#eff6ff")

    styles.add(ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=SECONDARY,
        spaceAfter=3
    ))

    styles.add(ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=PRIMARY,
        spaceAfter=6
    ))

    styles.add(ParagraphStyle(
        'MetaBox',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=10.5,
        textColor=MUTED
    ))

    styles.add(ParagraphStyle(
        'H1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=SECONDARY,
        spaceBefore=0,
        spaceAfter=4,
        keepWithNext=True
    ))

    styles.add(ParagraphStyle(
        'H2',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=PRIMARY,
        spaceBefore=3,
        spaceAfter=2,
        keepWithNext=True
    ))

    styles.add(ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=SECONDARY,
        spaceAfter=3
    ))

    styles.add(ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=10,
        textColor=colors.white
    ))

    styles.add(ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7,
        leading=9.5,
        textColor=SECONDARY
    ))

    styles.add(ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7,
        leading=9.5,
        textColor=SECONDARY
    ))

    styles.add(ParagraphStyle(
        'SummaryText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=10.5,
        textColor=SECONDARY
    ))

    story = []

    # ========================================================
    # PAGE 1: HEADER & SECTION 1 (TOP 10 AGENCY BENCHMARKS)
    # ========================================================
    story.append(Paragraph("TOP 10 AGENCY RESEARCH & REDESIGN BLUEPRINT", styles['DocTitle']))
    story.append(Paragraph("Competitive Benchmarking, High-Impact Features, UI/UX Roadmap & Website Health Toolkit", styles['DocSubtitle']))
    
    meta_data = [
        [
            Paragraph("<b>Project:</b> Vastora Tech Agency Redesign", styles['MetaBox']),
            Paragraph("<b>Target Date:</b> 2026-11-15 (Due Date)", styles['MetaBox'])
        ],
        [
            Paragraph("<b>Prepared For:</b> Strategic Growth & Development Team", styles['MetaBox']),
            Paragraph("<b>Review With:</b> Dristy & Leadership", styles['MetaBox'])
        ],
        [
            Paragraph("<b>Primary Objective:</b> Elevate Vastora Tech to Global Awwwards Agency Standards", styles['MetaBox']),
            Paragraph("<b>Core Deliverables:</b> 10 Agency Benchmarks + Feature Additions + Health Audit Tools", styles['MetaBox'])
        ]
    ]
    meta_table = Table(meta_data, colWidths=[260, 272])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), CARD_BG),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor("#e2e8f0")),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 8))

    story.append(Paragraph("1. Top 10 Agency Reference Websites (Audit & Inspiration)", styles['H1']))
    story.append(Paragraph(
        "Comprehensive competitive audit of the world's top 10 Awwwards-winning digital product and e-commerce agencies. Detailed below are their flagship design elements, technological innovations, and actionable takeaways for Vastora Tech:",
        styles['Body']
    ))

    agencies = [
        ("1. Build in Amsterdam", "buildinamsterdam.com", "Netherlands",
         "World ki #1 e-commerce flagship design agency.",
         "Scrollytelling product narrative, smooth cart micro-animations, tactile luxury typography.",
         "Vastora ke e-commerce demo ko simple image grid ki bajaye story-driven scroll view banayein."),
        
        ("2. Locomotive", "locomotive.ca", "Canada",
         "Multi-year Awwwards Agency of the Year winner.",
         "Ultra-smooth inertial scroll physics, dark/light contrast, ambient neon glow, magnetic buttons.",
         "Hero section aur service buttons me cursor magnetic physics aur soft glowing hover effect add karein."),
        
        ("3. Clay", "clay.global", "San Francisco (USA)",
         "Silicon Valley ki premier UI/UX agency (Stripe, Slack).",
         "Ultra-clean spacing, transparent 3-step collaboration roadmap, verified client ROI stats (+180% sales).",
         "Website par real numbers dikhayein: '+210% average client sales boost' aur simple 3-step process stepper."),

        ("4. Active Theory", "activetheory.net", "Los Angeles / Amsterdam",
         "World gold-standard for 3D WebGL & interactive coding.",
         "Real-time 3D models, smooth interactive particles, mouse drag interaction.",
         "Hero section ke background me dynamic floating tech particles aur interactive mouse parallax ko polish karein."),

        ("5. Scandiweb", "scandiweb.com", "Latvia / Global",
         "Duniya ki sabse badi Headless & Shopify Plus / Magento agency.",
         "Live technology comparison matrix, TCO (Total Cost) calculator, store speed score meter.",
         "Homepage par 'Shopify vs Custom Next.js' comparison chart aur instant project cost calculator banayein."),

        ("6. Huge Inc", "hugeinc.com", "New York (USA)",
         "Global enterprise digital transformation agency.",
         "Bold brutalist typography, massive interactive case studies, high-contrast video reels.",
         "Boring standard templates se hatkar bold typography aur direct customer pain points address karein."),

        ("7. Fantasy", "fantasy.co", "Silicon Valley / NY",
         "Futuristic UI/UX design agency (Tesla, Netflix, UFC).",
         "Floating glassmorphic cards, video micro-interactions, futuristic dashboard previews.",
         "Vastora ke proprietary Admin Dashboard ko ek sleek glass frame me live demo ki tarah preview karayein."),

        ("8. Media.Monks", "monks.com", "Netherlands / Global",
         "Duniya ki sabse badi digital creative production company.",
         "Personalized visitor journey (Startup vs Enterprise toggle), interactive 3D product configurators.",
         "Visitor type ke hisab se toggle switch: 'I am a Startup Founder' / 'I am an Enterprise Brand'."),

        ("9. Basic/Agency", "basicagency.com", "San Diego (USA)",
         "Top DTC Brand & eCommerce conversion agency (Patagonia).",
         "Grid-breaking layout, thumb-friendly mobile slide-outs, sticky floating action dock.",
         "Mobile devices ke liye screen ke bottom me thumb-friendly sticky 'Book Call / WhatsApp' dock lagayein."),

        ("10. Absolute Web", "absoluteweb.com", "Miami (USA)",
         "High-converting Shopify Plus & BigCommerce agency.",
         "Interactive project estimate wizard, live client speed score indicators, instant ROI calculator.",
         "Website par 'Calculate Your Store Price & Launch Time' multi-step wizard add karein.")
    ]

    t_all_data = [
        [
            Paragraph("Agency Name & Link", styles['TableHeader']),
            Paragraph("Specialty & Location", styles['TableHeader']),
            Paragraph("Best Fancy Feature (Flagship Element)", styles['TableHeader']),
            Paragraph("Vastora Tech Actionable Takeaway", styles['TableHeader'])
        ]
    ]

    for name, url, loc, spec, feat, lesson in agencies:
        t_all_data.append([
            Paragraph(f"<b>{name}</b><br/><font color='#1d4ed8'><u>{url}</u></font>", styles['TableCell']),
            Paragraph(f"<b>{loc}</b><br/>{spec}", styles['TableCell']),
            Paragraph(feat, styles['TableCell']),
            Paragraph(f"<b>Plan:</b> {lesson}", styles['TableCell'])
        ])

    table_all = Table(t_all_data, colWidths=[100, 115, 155, 162])
    table_all.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, CARD_BG]),
        ('TOPPADDING', (0,0), (-1,-1), 2.8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.8),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(table_all)

    # Clean Page Break -> Page 2
    story.append(PageBreak())

    # ========================================================
    # PAGE 2: SECTION 2 (VASTORA TECH AUDIT & STRATEGIC GAPS)
    # ========================================================
    story.append(Paragraph("2. Vastora Tech Website Audit: Abhi Kya Kami Hai & Kya Sudharna Hai", styles['H1']))
    story.append(Paragraph(
        "Aasan shabdon mein samjhein: Hamari website ka content achha hai, lekin <b>engagement aur interactive proof</b> kam hai. Jab koi client aata hai toh usko sirf padhna padta hai, wo kuch interact nahi kar pata. Hum isko badalne wale hain:",
        styles['Body']
    ))
    story.append(Spacer(1, 4))

    audit_table_data = [
        [
            Paragraph("Website Area", styles['TableHeader']),
            Paragraph("Abhi Ka Haal (Current State)", styles['TableHeader']),
            Paragraph("Identified Problem / Gap", styles['TableHeader']),
            Paragraph("Recommended Upgrade / Solution", styles['TableHeader'])
        ],
        [
            Paragraph("<b>A. Hero Section</b><br/>(First Impression)", styles['TableCellBold']),
            Paragraph("Typewriter text 'Launch Your Store in 5 Days' aur normal graphics.", styles['TableCell']),
            Paragraph("Client ko turant samajh nahi aata ki Vastora ka banaya store kitna smooth aur fast chalta hai.", styles['TableCell']),
            Paragraph("<b>Live Device Frame Switcher:</b> Hero section ke right side par [Customer Store] aur [Smart Admin Panel] dono ka interactive live switcher lagayein.", styles['TableCell'])
        ],
        [
            Paragraph("<b>B. Services Section</b><br/>(Hamari Sevaayein)", styles['TableCellBold']),
            Paragraph("Standard bullet points aur purane cards bane hue hain.", styles['TableCell']),
            Paragraph("Aam IT vendor jaisa lagta hai; high-ticket enterprise agency jaisa premium appeal nahi deta.", styles['TableCell']),
            Paragraph("<b>Bento-Grid Showcase:</b> Har service card ke andar uski delivery timeline (e.g. '5-Day Turnaround'), tech stack badges (Next.js, Node), aur deliverable checklist dikhayein.", styles['TableCell'])
        ],
        [
            Paragraph("<b>C. Portfolio & Demos</b><br/>(Kaam ka Saboot)", styles['TableCellBold']),
            Paragraph("Sirf static screenshot cards hain jisme client ke links hain.", styles['TableCell']),
            Paragraph("Client ko yeh nahi dikh raha ki hamare banaye store se client ki sales kitni badhi ya load speed kitni tez hui.", styles['TableCell']),
            Paragraph("<b>Before vs After Drag Slider:</b> Interactive comparison slider lagayein jahan client drag karke purani slow site (4.8s) vs Vastora ki nayi lightning-fast site (0.7s, +140% sales) ka farak dekh sake.", styles['TableCell'])
        ],
        [
            Paragraph("<b>D. Pricing & Lead Capture</b><br/>(Inquiry Aane Ka Tarika)", styles['TableCellBold']),
            Paragraph("Sirf ek basic 'Contact Us' form aur WhatsApp icon hai.", styles['TableCell']),
            Paragraph("Bade decision-makers direct form bharne se bachte hain jab tak unhe indicative pricing aur timeline ka andaza na ho.", styles['TableCell']),
            Paragraph("<b>Interactive Cost & Scope Estimator:</b> Client 3 sawal select karega (Store Type, Catalog, Features) aur usko screen par turant estimated budget aur 5-din launch timeline mil jayegi, fir wo direct call book karega.", styles['TableCell'])
        ],
        [
            Paragraph("<b>E. Trust & Urgency Signals</b><br/>(Conversion Boosters)", styles['TableCellBold']),
            Paragraph("Generic 'Trusted by 500+ businesses' rating pill.", styles['TableCell']),
            Paragraph("Real-time availability, team capacity, ya project exclusivity ka koi visual signal nahi hai.", styles['TableCell']),
            Paragraph("<b>Live Availability Badge:</b> Navbar me pulsing green dot: '🟢 Only 2 Client Slots Left for November' + Mobile devices ke liye bottom me sticky floating quick contact bar.", styles['TableCell'])
        ]
    ]

    audit_table = Table(audit_table_data, colWidths=[95, 120, 150, 167])
    audit_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), SECONDARY),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, CARD_BG]),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(audit_table)

    # Clean Page Break -> Page 3
    story.append(PageBreak())

    # ========================================================
    # PAGE 3: SECTION 3 (TOP 5 FEATURES) & SECTION 4 (HEALTH TOOLS)
    # ========================================================
    story.append(Paragraph("3. Top 5 High-Impact Features Jo Hum Website Mein Add Karenge", styles['H1']))
    story.append(Paragraph(
        "Yeh 5 features add karte hi Vastora Tech ki website global Awwwards-level agencies ke standard par aa jayegi:",
        styles['Body']
    ))
    story.append(Spacer(1, 2))

    feat_list = [
        ("Feature 1: Interactive E-Commerce Cost & Launch Time Calculator",
         "Multi-step tool jisme client 3 steps select karega (Store Type, Catalog Size, Features). Screen par turant estimate aayega: <i>'Estimated: ₹45,000 - ₹65,000 | Launch: 5 Se 6 Din'</i> + Instant Proposal Download jisse high-intent qualified leads milengi."),

        ("Feature 2: Dual 'Storefront + Smart Admin' Live Sandbox Switcher",
         "Hamara sabse bada USP: har client ko custom store ke sath ultra-powerful Admin Panel bhi milta hai. Homepage par interactive switcher hoga: <b>[Customer Store]</b> aur <b>[Admin Dashboard]</b> jahan live orders, analytics, aur inventory animate hogi."),

        ("Feature 3: Draggable 'Before vs After' Performance Slider",
         "Case studies me interactive comparison slider: Client line drag karega toh ek taraf purana slow template (4.8s) aur dusri taraf Vastora ka custom design (0.7s load speed, 3.8% conversion rate) dikhega. Real visual proof converts!"),

        ("Feature 4: Free Website Speed & Health Audit Tool (Lead Machine)",
         "Homepage banner jahan client apna website URL dale ga. Automated engine 10 second me Google Speed score, mobile compatibility aur SEO health report dikha dega. Jin clients ki site slow hogi, wo turant Vastora ko hire karenge!"),

        ("Feature 5: Live Agency Booking Status & Floating Thumb Dock",
         "Navbar me live availability indicator: <b>'🟢 Availability: Only 2 Client Slots Left for November'</b>. Mobile users ke liye bottom me sticky glassmorphic floating bar [WhatsApp Chat] aur [Book 15-Min Strategy Call] jo mobile conversion 3x badhayega.")
    ]

    for f_title, f_desc in feat_list:
        story.append(Paragraph(f_title, styles['H2']))
        story.append(Paragraph(f_desc, styles['Body']))
        story.append(Spacer(1, 2))

    story.append(Spacer(1, 4))

    # SECTION 4: WEBSITE HEALTH CHECKUP TOOLS
    story.append(Paragraph("4. Website Health Checkup & Reviewing Tools (Item 5)", styles['H1']))
    story.append(Paragraph(
        "Industry-standard tools for internal client store QA, technical SEO health, and white-label lead generation:",
        styles['Body']
    ))
    story.append(Spacer(1, 2))

    health_tools = [
        [
            Paragraph("Tool Name", styles['TableHeader']),
            Paragraph("Category & Link", styles['TableHeader']),
            Paragraph("Core Diagnostic Function", styles['TableHeader']),
            Paragraph("Vastora Tech Agency Application", styles['TableHeader'])
        ],
        [
            Paragraph("<b>Google PageSpeed Insights</b>", styles['TableCellBold']),
            Paragraph("Speed & Core Web Vitals<br/><font color='#1d4ed8'>pagespeed.web.dev</font>", styles['TableCell']),
            Paragraph("Google's official benchmark for LCP, FID, CLS on mobile & desktop devices.", styles['TableCell']),
            Paragraph("Prove client speed upgrade (e.g. Red score 35 jumped to Green 95+ after Vastora launch).", styles['TableCell'])
        ],
        [
            Paragraph("<b>GTmetrix</b>", styles['TableCellBold']),
            Paragraph("Server & Asset Waterfall<br/><font color='#1d4ed8'>gtmetrix.com</font>", styles['TableCell']),
            Paragraph("Full asset payload breakdown, uncompressed image detection, TTFB server response.", styles['TableCell']),
            Paragraph("Pre-launch image & asset optimization checklist for development team.", styles['TableCell'])
        ],
        [
            Paragraph("<b>Screaming Frog SEO Spider</b>", styles['TableCellBold']),
            Paragraph("Technical SEO Audit<br/><font color='#1d4ed8'>screamingfrog.co.uk</font>", styles['TableCell']),
            Paragraph("Crawls all store URLs for broken links (404), duplicate titles, missing meta tags, schema.", styles['TableCell']),
            Paragraph("Mandatory 100% technical SEO audit pass before client store handover.", styles['TableCell'])
        ],
        [
            Paragraph("<b>Qualys SSL Labs</b>", styles['TableCellBold']),
            Paragraph("Security & SSL Encryption<br/><font color='#1d4ed8'>ssllabs.com</font>", styles['TableCell']),
            Paragraph("Deep SSL/TLS handshake check, cipher suites, Bank-grade A+ encryption score.", styles['TableCell']),
            Paragraph("Reassures high-ticket merchants of checkout security & PCI compliance.", styles['TableCell'])
        ],
        [
            Paragraph("<b>SEOptimer / MySiteAuditor</b>", styles['TableCellBold']),
            Paragraph("White-Label Lead Widget<br/><font color='#1d4ed8'>seoptimer.com</font>", styles['TableCell']),
            Paragraph("Automated branded audit engine that generates instant branded PDF reports for visitors.", styles['TableCell']),
            Paragraph("Embed directly on Vastora Tech homepage to capture inbound qualified leads.", styles['TableCell'])
        ]
    ]

    h_table = Table(health_tools, colWidths=[100, 115, 155, 162])
    h_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, CARD_BG]),
        ('TOPPADDING', (0,0), (-1,-1), 2.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2.5),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(h_table)
    story.append(Spacer(1, 4))

    # Executive Summary Box at bottom of Page 3
    summary_box_data = [[
        Paragraph(
            "<b>Executive Summary & Deliverable Status:</b> All 4 core research areas (10 Global Agency Benchmarks, Vastora Internal Audit, High-Impact Features, and Website Health Tools) are finalized. Phased execution ready for development.",
            styles['SummaryText']
        )
    ]]
    summary_box_table = Table(summary_box_data, colWidths=[532])
    summary_box_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), HIGHLIGHT_BG),
        ('BOX', (0,0), (-1,-1), 1, PRIMARY),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 7),
        ('RIGHTPADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(summary_box_table)

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Compact 3-Page Blueprint PDF successfully generated at {filename}")

if __name__ == '__main__':
    out_pdf = "Vastora_Tech_Top_10_Agencies_Hinglish_Guide.pdf"
    build_pdf(out_pdf)
