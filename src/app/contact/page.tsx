import { ContactForm } from "@/components/ui/contact-form";
import styles from "./page.module.css";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const initialAccordionValue = ["item-1"];

export default function Contact() {
  const items = [
    {
      value: "item-1",
      trigger: "Who can join The Creative Room?",
      content:
        "Any current or past BCIT student can register as a member. Not a student? You can still join us at our community events.",
    },
    {
      value: "item-2",
      trigger: "Is there a registration fee?",
      content: "No. You can choose events you'd like to attend.",
    },
    {
      value: "item-3",
      trigger: "Do I have to attend every club event?",
      content: "No. You can choose events you'd like to attend.",
    },
    {
      value: "item-4",
      trigger: "How do I join the club?",
      content: "Visit our Discord server link and fill out the application.",
    },
  ];
  return (
    <div className={`px-[var(--site-margin-x)] ${styles.contactPage}`}>
      <div className={styles.contactHero}>
        <Image
          className={styles.contactImage}
          src='/images/contact-cards.png'
          alt='contact background image'
          fill
          sizes='(min-width: 768px) 100vw, 100vw'
        />

        <div className={styles.contact}>
          <div className={styles.contactInfo}>
            <div className={styles.contactHeaderContainer}>
              <div className={styles.contactHeader}>
                <p className='type-eyebrow'>Get in touch</p>
                <h1 className='type-h1'>Contact Us</h1>
              </div>
              <div className={styles.contactDescription}>
                <p className='type-body'>
                  Whether you’re curious about an upcoming event, have a project
                  in mind, or just want to introduce yourself, our inbox is
                  always open. Reach out and let’s start a conversation!
                </p>
              </div>
            </div>
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                  >
                    <path
                      d='M1.5 2C0.671875 2 0 2.67188 0 3.5C0 3.97187 0.221875 4.41562 0.6 4.7L7.4 9.8C7.75625 10.0656 8.24375 10.0656 8.6 9.8L15.4 4.7C15.7781 4.41562 16 3.97187 16 3.5C16 2.67188 15.3281 2 14.5 2H1.5ZM0 5.5V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V5.5L9.2 10.6C8.4875 11.1344 7.5125 11.1344 6.8 10.6L0 5.5Z'
                      fill='#1E1E1E'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='type-label-sm uppercase'>Email Us</h3>
                  <p className='type-body-semi-bold'>
                    thecreativeroom.damd@gmail.com
                  </p>
                </div>
              </div>
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='16'
                    viewBox='0 0 20 16'
                    fill='none'
                  >
                    <path
                      d='M16.3916 2.18239C16.3865 2.1725 16.378 2.16474 16.3677 2.16052C15.1764 1.61391 13.9191 1.22414 12.6275 1.00096C12.6158 0.998774 12.6037 1.00035 12.5929 1.00545C12.5821 1.01056 12.5732 1.01894 12.5674 1.02939C12.3962 1.34011 12.2408 1.65926 12.1018 1.98564C10.7095 1.77429 9.29329 1.77429 7.901 1.98564C7.76105 1.65844 7.60315 1.3392 7.42803 1.02939C7.42202 1.01916 7.41307 1.01098 7.40235 1.00591C7.39162 1.00083 7.37962 0.99911 7.3679 1.00096C6.07615 1.22367 4.81885 1.61347 3.62765 2.16055C3.61745 2.16487 3.60885 2.17225 3.60303 2.18167C1.22087 5.73911 0.568308 9.20908 0.888433 12.6361C0.889334 12.6445 0.891914 12.6526 0.896021 12.66C0.900128 12.6674 0.905677 12.6739 0.912339 12.679C2.29945 13.7061 3.85094 14.4901 5.50062 14.9975C5.51224 15.0009 5.52464 15.0008 5.53617 14.997C5.5477 14.9932 5.55779 14.986 5.56509 14.9763C5.9194 14.4942 6.23335 13.9837 6.50375 13.45C6.50746 13.4427 6.50958 13.4347 6.50997 13.4265C6.51036 13.4183 6.509 13.4101 6.50599 13.4024C6.50298 13.3948 6.49839 13.3879 6.49251 13.3821C6.48664 13.3764 6.47961 13.372 6.4719 13.3691C5.97683 13.1797 5.49754 12.9514 5.03853 12.6862C5.03019 12.6813 5.02319 12.6745 5.01814 12.6662C5.01309 12.658 5.01015 12.6486 5.00958 12.6389C5.00901 12.6293 5.01082 12.6196 5.01486 12.6108C5.0189 12.6021 5.02504 12.5944 5.03275 12.5885C5.12906 12.5164 5.22543 12.4413 5.3174 12.3655C5.32557 12.3588 5.33546 12.3545 5.34595 12.3531C5.35644 12.3516 5.36712 12.3532 5.37678 12.3575C8.38393 13.7299 11.6396 13.7299 14.6112 12.3575C14.6208 12.3529 14.6316 12.3512 14.6423 12.3524C14.6529 12.3537 14.663 12.358 14.6713 12.3648C14.7633 12.4406 14.8596 12.5164 14.9567 12.5885C14.9644 12.5943 14.9706 12.6019 14.9747 12.6107C14.9788 12.6195 14.9807 12.6291 14.9802 12.6387C14.9797 12.6484 14.9768 12.6578 14.9718 12.6661C14.9668 12.6744 14.9599 12.6813 14.9516 12.6862C14.4936 12.9536 14.0139 13.1818 13.5175 13.3684C13.5098 13.3714 13.5028 13.3759 13.497 13.3817C13.4911 13.3875 13.4866 13.3945 13.4836 13.4022C13.4807 13.4099 13.4794 13.4182 13.4799 13.4264C13.4803 13.4346 13.4825 13.4427 13.4863 13.45C13.7612 13.9808 14.0747 14.4906 14.4242 14.9755C14.4313 14.9854 14.4414 14.9929 14.4529 14.9968C14.4645 15.0007 14.477 15.0009 14.4887 14.9974C16.1413 14.4917 17.6955 13.7077 19.0844 12.679C19.0911 12.6741 19.0968 12.6678 19.1009 12.6605C19.105 12.6532 19.1075 12.6451 19.1083 12.6368C19.4915 8.67483 18.4667 5.2333 16.3916 2.18239ZM6.95284 10.5494C6.04746 10.5494 5.30146 9.71855 5.30146 8.69817C5.30146 7.6778 6.033 6.84689 6.95284 6.84689C7.87987 6.84689 8.61865 7.68502 8.60418 8.69811C8.60418 9.71855 7.87262 10.5494 6.95284 10.5494ZM13.0585 10.5494C12.1531 10.5494 11.4071 9.71855 11.4071 8.69817C11.4071 7.6778 12.1387 6.84689 13.0585 6.84689C13.9856 6.84689 14.7243 7.68502 14.7098 8.69811C14.7098 9.71855 13.9856 10.5494 13.0585 10.5494Z'
                      fill='#1E1E1E'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='type-label-sm uppercase'>Join Discord</h3>
                  <p className='type-body-semi-bold'>discord.gg/creativeroom</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>

      <div className='mt-[var(--space-section-lg)]'>
        <div className={styles.faqHeader}>
          <h4 className='type-eyebrow'>Frequently Asked Questions</h4>
          <h2 className='type-h1'>FAQ</h2>
        </div>
        <div className={styles.faq}>
          <Accordion
            defaultValue={initialAccordionValue}
            className={`max-w-1/2 ${styles.accordion}`}
          >
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
