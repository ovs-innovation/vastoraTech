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
            self.drawString(40, 758, "Vastora Tech | Top Agency Research & Redesign Blueprint")
            self.drawRightString(572, 758, "Internal Strategy & Executive Review")
            self.setStrokeColor(colors.HexColor("#cbd5e1"))
            self.setLineWidth(0.5)
            self.line(40, 752, 572, 752)
        
        # Footer
        self.setFont("Helvetica", 8)
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(572, 25, page_str)
        self.drawString(40, 25, "Vastora Tech Agency Redesign - Strategic Review Blueprint")
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(40, 34, 572, 34)
        self.restoreState()

def build_pdf(filename):
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
            Paragraph("<b>Target Due Date:</b> 2026-11-15", styles['MetaBox'])
        ],
        [
            Paragraph("<b>Prepared For:</b> Strategic Growth & Development Team", styles['MetaBox']),
            Paragraph("<b>Review With:</b> Dristy & Leadership", styles['MetaBox'])
        ],
        [
            Paragraph("<b>Objective:</b> Modernize Vastora Tech to Global Awwwards Agency Standard", styles['MetaBox']),
            Paragraph("<b>Core Focus:</b> UI/UX, Lead Gen Tools, High-Conversion E-Commerce Demos", styles['MetaBox'])
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

    story.append(Paragraph("1. Research & Analysis of Top Agency Websites (Global Benchmarks)", styles['H1']))
    story.append(Paragraph(
        "To elevate Vastora Tech from a standard IT development vendor to a premier high-ticket digital & e-commerce agency, we audited world-class digital agencies recognized by <b>Awwwards, FWA, and Clutch</b>. Below is the breakdown of their design architecture and high-converting mechanics:",
        styles['Body']
    ))

    agencies = [
        ("1. Build in Amsterdam", "buildinamsterdam.com", "Netherlands",
         "Global Benchmark for E-Commerce Flagship Stores",
         "Scrollytelling product narratives, tactile luxury typography, smooth micro-interactions on add-to-cart.",
         "Adopt narrative-driven case studies for Vastora's custom e-commerce solutions instead of static mockups."),
        
        ("2. Locomotive", "locomotive.ca", "Canada",
         "Multi-year Awwwards Agency of the Year",
         "Smooth inertial scroll physics, high contrast dark/light themes, ambient lighting & glowing gradients.",
         "Upgrade hero banners and service cards with fluid hover interactions, subtle neon glow, and magnetic buttons."),
        
        ("3. Clay", "clay.global", "San Francisco (USA)",
         "Silicon Valley Premier UI/UX & Tech Agency",
         "Ultra-clean typography & whitespace, interactive feature spotlights, prominent client ROI metrics (+180%).",
         "Add verified client ROI statistics, customer revenue metrics, and an interactive 'How We Work' process stepper."),

        ("4. Active Theory", "activetheory.net", "Los Angeles / Amsterdam",
         "World gold-standard for 3D WebGL & high-tech coding",
         "Real-time 3D models, smooth interactive particles, mouse drag interaction.",
         "Polish interactive background particles and subtle parallax responsiveness on the hero section."),

        ("5. Scandiweb", "scandiweb.com", "Latvia / Global",
         "Top Tier E-Commerce & Headless Architecture Agency",
         "Live technology stack comparison matrix, interactive TCO & Project Cost Calculator.",
         "Implement an Interactive E-Commerce Cost & Timeline Estimator and a Tech Stack Selector on homepage."),

        ("6. Huge Inc", "hugeinc.com", "New York (USA)",
         "Global enterprise digital & design transformation",
         "Bold brutalist typography, massive interactive case studies, high-contrast video reels.",
         "Replace generic stock layouts with high-contrast typography and clear executive value propositions."),

        ("7. Fantasy", "fantasy.co", "Silicon Valley / NY",
         "Futuristic UI/UX design agency (Tesla, Netflix)",
         "Floating glassmorphic cards, video micro-interactions, futuristic dashboard previews.",
         "Showcase Vastora's custom Admin Dashboard inside a sleek interactive glass preview frame."),

        ("8. Media.Monks", "monks.com", "Netherlands / Global",
         "World's largest digital creative production agency",
         "Personalized visitor journey (Startup vs Enterprise toggle), interactive 3D product configurators.",
         "Introduce persona-based quick navigation toggles for startup founders vs enterprise merchants."),

        ("9. Basic/Agency", "basicagency.com", "San Diego (USA)",
         "Top DTC Brand & eCommerce conversion agency",
         "Grid-breaking layouts, thumb-friendly mobile slide-outs, sticky floating action dock.",
         "Embed a mobile-first sticky action bar at the bottom for quick WhatsApp and calendar bookings."),

        ("10. Absolute Web", "absoluteweb.com", "Miami (USA)",
         "High-converting Shopify Plus & BigCommerce agency",
         "Interactive project estimate wizard, live client speed score indicators, instant ROI calculator.",
         "Embed self-service estimation tools and client speed score comparison meters.")
    ]

    t_all_data = [
        [
            Paragraph("Agency Name & Link", styles['TableHeader']),
            Paragraph("Specialty & Location", styles['TableHeader']),
            Paragraph("Key Design & Feature Highlights", styles['TableHeader']),
            Paragraph("Strategic Application to Vastora Tech", styles['TableHeader'])
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

    # Page Break -> Page 2
    story.append(PageBreak())

    # ========================================================
    # PAGE 2: SECTION 2 (VASTORA TECH AUDIT & STRATEGIC GAPS)
    # ========================================================
    story.append(Paragraph("2. Vastora Tech Website Audit & Strategic Gap Analysis", styles['H1']))
    story.append(Paragraph(
        "A rigorous internal audit of Vastora Tech's current website reveals strong foundational assets (5-day store launch promise, custom admin backend), but critical UX gaps that currently prevent enterprise-tier conversions:",
        styles['Body']
    ))
    story.append(Spacer(1, 4))

    audit_table_data = [
        [
            Paragraph("Website Area", styles['TableHeader']),
            Paragraph("Current State (Vastora Tech)", styles['TableHeader']),
            Paragraph("Identified Problem / Gap", styles['TableHeader']),
            Paragraph("Recommended Upgrade / Action Plan", styles['TableHeader'])
        ],
        [
            Paragraph("<b>A. Hero Section</b><br/>(First Impression)", styles['TableCellBold']),
            Paragraph("Typewriter text 'Launch Your Store in 5 Days' and standard graphics.", styles['TableCell']),
            Paragraph("Lacks tangible interaction; visitors cannot test or experience the software directly.", styles['TableCell']),
            Paragraph("<b>Live Device Frame Switcher:</b> Embed an interactive 'Storefront + Admin Panel' live switcher so prospects can test drive both views.", styles['TableCell'])
        ],
        [
            Paragraph("<b>B. Services Section</b><br/>(Service Architecture)", styles['TableCellBold']),
            Paragraph("Text-heavy bullet points and standard icon cards.", styles['TableCell']),
            Paragraph("Does not convey speed, proprietary architecture, or commercial business impact.", styles['TableCell']),
            Paragraph("<b>Bento-Grid Showcase:</b> Interactive Bento-grid cards showing deliverable checklists, tech badges (Next.js, Node), and turnaround days.", styles['TableCell'])
        ],
        [
            Paragraph("<b>C. Portfolio & Demos</b><br/>(Proof of Work)", styles['TableCellBold']),
            Paragraph("Static screenshot cards with external client links.", styles['TableCell']),
            Paragraph("Missing before-and-after proof, measurable client revenue/speed impact, and performance proof.", styles['TableCell']),
            Paragraph("<b>Before/After Interactive Sliders:</b> Compare old client sites vs. Vastora redesigned stores with verified speed (0.7s) and conversion (+140%) metrics.", styles['TableCell'])
        ],
        [
            Paragraph("<b>D. Pricing & Lead Capture</b><br/>(Inbound Pipeline)", styles['TableCellBold']),
            Paragraph("Standard contact form and floating WhatsApp button.", styles['TableCell']),
            Paragraph("High friction for decision-makers who want an instant estimate before booking a call.", styles['TableCell']),
            Paragraph("<b>Self-Service Cost & Scope Calculator:</b> Interactive wizard generating an instant price range and capturing qualified leads.", styles['TableCell'])
        ],
        [
            Paragraph("<b>E. Trust & Urgency</b><br/>(Conversion Boosters)", styles['TableCellBold']),
            Paragraph("Generic 'Trusted by 500+ businesses' rating pill.", styles['TableCell']),
            Paragraph("No live agency availability indicator or social proof triggers in the viewport.", styles['TableCell']),
            Paragraph("<b>Live Availability Badge:</b> Modern floating glassmorphism dock, live agency slot counter ('🟢 2 project spots open for Q4').", styles['TableCell'])
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

    # Page Break -> Page 3
    story.append(PageBreak())

    # ========================================================
    # PAGE 3: SECTION 3 (TOP 5 FEATURES) & SECTION 4 (HEALTH TOOLS)
    # ========================================================
    story.append(Paragraph("3. New Feature Roadmap: High-Conversion Additions", styles['H1']))
    story.append(Paragraph(
        "Based on global agency standards, here are the top 5 high-impact features to build into Vastora Tech:",
        styles['Body']
    ))
    story.append(Spacer(1, 2))

    feat_list = [
        ("Feature 1: Interactive E-Commerce Cost & Launch Time Calculator",
         "A multi-step configuration wizard allowing clients to select Store Type, Catalog Size, and Modules. Generates an instant transparent price range and completion timeline (e.g. '5-7 Days'), capturing high-intent leads with project specs."),

        ("Feature 2: Dual 'Storefront + Smart Admin' Live Sandbox Switcher",
         "Vastora Tech's biggest USP: every client gets a high-performance customer store AND a tailor-made admin panel dashboard. Interactive toggle right on the homepage flips between [Customer Storefront] and [Admin Dashboard] with live simulated analytics."),

        ("Feature 3: Draggable 'Before vs After' Performance Slider",
         "Interactive comparison widgets on client portfolio items where clients drag a slider to inspect the client's previous outdated store vs. Vastora Tech's redesigned store (Page load 4.8s down to 0.7s, conversion jumped +142%)."),

        ("Feature 4: Free Website Speed & Health Audit Tool (Lead Magnet)",
         "A dedicated tool block on homepage where visitors enter their current website URL and email. An automated diagnostic runs behind the scenes and emails them an executive performance, SEO, and mobile health report."),

        ("Feature 5: Live Agency Booking Status & Floating Thumb Dock",
         "Dynamic status badge in the header: '🟢 Q4 Availability: 2 Client Slots Remaining' with direct integration to an interactive booking widget (Cal.com / Calendly) and mobile sticky bottom dock.")
    ]

    for f_title, f_desc in feat_list:
        story.append(Paragraph(f_title, styles['H2']))
        story.append(Paragraph(f_desc, styles['Body']))
        story.append(Spacer(1, 2))

    story.append(Spacer(1, 4))

    # SECTION 4: WEBSITE HEALTH CHECKUP TOOLS
    story.append(Paragraph("4. Website Health Checkup & Audit Toolkit (Item 5)", styles['H1']))
    story.append(Paragraph(
        "Curated industry-standard toolkit categorized for internal diagnostics, client audits, and white-label lead generation:",
        styles['Body']
    ))
    story.append(Spacer(1, 2))

    health_tools = [
        [
            Paragraph("Category", styles['TableHeader']),
            Paragraph("Top Tools & Links", styles['TableHeader']),
            Paragraph("What It Tests / Measures", styles['TableHeader']),
            Paragraph("Best Use for Vastora Tech", styles['TableHeader'])
        ],
        [
            Paragraph("<b>Performance & Speed</b>", styles['TableCellBold']),
            Paragraph("• Google PageSpeed Insights<br/>• GTmetrix<br/>• WebPageTest.org", styles['TableCell']),
            Paragraph("Core Web Vitals (LCP, FID, CLS), TTFB, asset waterfall, server compression, script blocking.", styles['TableCell']),
            Paragraph("Benchmark client stores before and after launch to prove performance gains (Score 95+).", styles['TableCell'])
        ],
        [
            Paragraph("<b>Technical SEO & Health</b>", styles['TableCellBold']),
            Paragraph("• Screaming Frog SEO Spider<br/>• Semrush Site Audit<br/>• Ahrefs Webmaster Tools", styles['TableCell']),
            Paragraph("Crawlability, broken links (404s), missing meta tags, canonical errors, duplicate content, schema.", styles['TableCell']),
            Paragraph("Routine monthly health checkups for client retainers and pre-launch audits.", styles['TableCell'])
        ],
        [
            Paragraph("<b>Security & SSL</b>", styles['TableCellBold']),
            Paragraph("• Qualys SSL Labs<br/>• Sucuri SiteCheck<br/>• SecurityHeaders.com", styles['TableCell']),
            Paragraph("SSL certificate handshake, TLS protocol versions, XSS protection, Content-Security-Policy.", styles['TableCell']),
            Paragraph("Security seal verification to reassure e-commerce merchants of payment safety.", styles['TableCell'])
        ],
        [
            Paragraph("<b>Agency Lead-Gen Widgets</b>", styles['TableCellBold']),
            Paragraph("• SEOptimer White-Label<br/>• MySiteAuditor<br/>• Google Lighthouse API", styles['TableCell']),
            Paragraph("Automated, branded PDF audit reports generated on-demand when prospects submit domain.", styles['TableCell']),
            Paragraph("Embed directly on Vastora Tech website to capture enterprise merchant leads.", styles['TableCell'])
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
    out_pdf = "Vastora_Tech_Agency_Research_and_Redesign_Report.pdf"
    build_pdf(out_pdf)
