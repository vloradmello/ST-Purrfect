from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import time

# Initialize the WebDriver (assuming Chrome)
driver = webdriver.Chrome()

# Maximize the window
driver.maximize_window()

# Open the login page
driver.get("https://boisterous-kringle-69f238.netlify.app/index.html")
time.sleep(2)  # wait for the page to load

# Fill in the login details and log in
username_input = driver.find_element(By.CSS_SELECTOR, "input.username")
password_input = driver.find_element(By.CSS_SELECTOR, "input.password")

username_input.send_keys("purrfect")  # use username
password_input.send_keys("purr")  # use password

login_button = driver.find_element(By.CSS_SELECTOR, "button.login-button")
login_button.click()
time.sleep(2)  # wait for the home page to load

# Perform scrolling on the home page
def scroll_page(sleep_time=1.5):
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(sleep_time)
    driver.execute_script("window.scrollTo(0, 0);")
    time.sleep(sleep_time)

scroll_page(5)  # scroll slower on the home page

# Hover over "Shop" and click on each category
shop_nav = driver.find_element(By.LINK_TEXT, "Shop")
ActionChains(driver).move_to_element(shop_nav).perform()
time.sleep(1)

categories = ["Cat Food", "Cat Toys", "Dog Food", "Dog Toys", "Dog Supplements"]
for category in categories:
    category_link = driver.find_element(By.LINK_TEXT, category)
    category_link.click()
    time.sleep(2)  # wait for the category page to load
    scroll_page(2)  # scroll slower on category pages
    # Go back to the home page to select the next category
    driver.back()
    time.sleep(2)  # wait for the home page to load again
    ActionChains(driver).move_to_element(shop_nav).perform()
    time.sleep(1)

# Navigate to collections.html and perform scrolling
collections_link = driver.find_element(By.LINK_TEXT, "Collections")
collections_link.click()
time.sleep(2)  # wait for the collections page to load
scroll_page(2)  # scroll slower on collections page

# Navigate to about.html and perform scrolling
about_link = driver.find_element(By.LINK_TEXT, "About Us")
about_link.click()
time.sleep(2)  # wait for the about page to load
scroll_page(2)  # scroll slower on about page

# Log out by clicking the logout button in the navigation bar
logout_button = driver.find_element(By.ID, "logoutButton")
logout_button.click()
time.sleep(2)  # wait for the logout action to complete

# Close the browser
driver.quit()
