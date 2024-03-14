## **Technologies used**

    - React
    - Redux
    - TailwindCss

## **You can access the react app at the following vercel link**

[https://minimalisticecommerce.vercel.app/](https://minimalisticecommerce.vercel.app/)

## **Follow the steps to run the project on your local machine**

1.  Download node from the following website based on your OS and install it.

            [https://nodejs.org/en/download](https://nodejs.org/en/download)

    - Run the following command on terminal to verify the installation.

            node --version

2.  Download git from the following website based on your OS and install it.

            [https://git-scm.com/downloads](https://git-scm.com/downloads)

    - Run the following command on terminal to verify the installation.

            git --version

3.  Open terminal/command prompt on the desktop and run the following command and it will create a clone named "entnt"

            git clone https://github.com/praveenmarch22/entnt.git

4.  Now open the terminal in entnt folder or run the following command to move our terminal into that cloned folder.

            cd entnt

5.  Now run the following command and it will install all dependencies.

            git install

6.  After installing everything run the following command to start the server.

            npm run start

7.  After that our appliction will be accesssible at given url

            http://localhost:3000/

## **Accessing the application**

1. When you open the application the homepage will be opened where you will see the dashboard that looks like the following image. Where it will contain total number of orders, total number of products, totl number of categories and links to product and order management pages. Click on **Products** either on the navbar or the link in the dashboard page.

![Dashboard](https://github.com/praveenmarch22/entnt-pics/blob/main/1.png)

2. Now products page will be opened where we will have number of products with name, category, stock and price. And also you will find **Edit/Delete** and **Add Product** buttons.

![Products](https://github.com/praveenmarch22/entnt-pics/blob/main/2.png)

3. If you click on **Edit/Delete** in the product component below price two buttons **Delete** and **Edit** will be appeared. If you click on **Delete** the product will be deleted. If you click on **Edit/Delete** in the product again **Delete** and **Edit** will be disappeared.

   - Before Clicking **Delete**

     ![Deleting products](https://github.com/praveenmarch22/entnt-pics/blob/main/3.png)

   - After clicking **Delete**

     ![Deleting products](https://github.com/praveenmarch22/entnt-pics/blob/main/4.png)

4. If you click on **Edit** a popup will be opened on the product itself where you can edit the name, stock and price of the product. And if you click **Save** it will update the details of the product. You can "Cancel" it if you want to.

   - Before editing the product

     ![Editing products](https://github.com/praveenmarch22/entnt-pics/blob/main/5.png)

   - During editing the product

     ![Editing products](https://github.com/praveenmarch22/entnt-pics/blob/main/6.png)

   - After editing the product

     ![Editing products](https://github.com/praveenmarch22/entnt-pics/blob/main/7.png)

5. And If you click on **Add Product** button You will be redirected to page where you can Add a product. Where you have to enter name, category, stock ,price and you have to add image also.And click on the **Add Product**. The product will be added and you can see the product in products page. And if you click on cancel the product will not be added.

   - Before adding the product

     ![Adding products](https://github.com/praveenmarch22/entnt-pics/blob/main/8.png)

   - Adding the product

     ![Adding products](https://github.com/praveenmarch22/entnt-pics/blob/main/9.png)

   - After adding the product.

     ![Adding products](https://github.com/praveenmarch22/entnt-pics/blob/main/10.png)

6. Now click on the **Orders** either form the navbar or in the Products page itself. And it will be like given image.

   ![Orders](https://github.com/praveenmarch22/entnt-pics/blob/main/11.png)

7. There If you click on the name of the customer you will find the order details below that order data and again if you click on it the details will be disappeared.

   ![Details of the  products](https://github.com/praveenmarch22/entnt-pics/blob/main/12.png)

8. There you will find **Edit** and **Delete** buttons.If you click on the delete the order will be deleted.

   - Before deleting the second order

     ![Deleting orders](https://github.com/praveenmarch22/entnt-pics/blob/main/13.png)

   - After deleting the second order

     ![Deleting orders](https://github.com/praveenmarch22/entnt-pics/blob/main/14.png)

9. If you click on **Edit**, a dropdown will be appeared and you will be able to update the status of that order.

   - Before updating the order with id 4 from shipped to delivered.

     ![Updating orders](https://github.com/praveenmarch22/entnt-pics/blob/main/15.png)

   - During updating the order.

     ![Updating orders](https://github.com/praveenmarch22/entnt-pics/blob/main/16.png)

   - After updating the order.

     ![Updating orders](https://github.com/praveenmarch22/entnt-pics/blob/main/17.png)

10. In orders page you can find **Orders Calender View** . If you click on that A calender will be opened. Like the following page and may be it looks different for you because of the generated mockdata.

    ![orders calender view](https://github.com/praveenmarch22/entnt-pics/blob/main/18.png)

11. If you cannot find any orders in that month that means there are no orders for that month. So top left you will find **Today**, **Back**, and **Next**. Click on the next may be you will find some orders like this.

![orders calender view](https://github.com/praveenmarch22/entnt-pics/blob/main/19.png)

12. If you click on the particular date you will see what are the orders due on that date like this.

![orders calender view](https://github.com/praveenmarch22/entnt-pics/blob/main/20.png)
