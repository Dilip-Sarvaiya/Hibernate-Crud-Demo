/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DAO;

import entity.User;
import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import util.HibernateUtil;

/**
 *
 * @author Dilip J Sarvaiya
 */
public class UsersDAO {
     static Session session=null;
    public static void save(User bean)
    {
        session=HibernateUtil.getSessionFactory().openSession();
        Transaction t=session.beginTransaction();
        session.save(bean);
        t.commit();
        session.close();
    }
    public static void update(User bean)
    {
        session=HibernateUtil.getSessionFactory().openSession();
        Transaction t=session.beginTransaction();
        session.update(bean);
        t.commit();
        session.close();
    }
     public static void delete(User bean)
    {
        session=HibernateUtil.getSessionFactory().openSession();
        Transaction t=session.beginTransaction();
        session.delete(bean);
        t.commit();
        session.close();
    }
     public static List<User> viewAll()
    {
        String hql = "from User";
        session = HibernateUtil.getSessionFactory().openSession();
        Query query = session.createQuery(hql);
        List<User> users = query.list();
        session.close();
        return users;
    }
     
     //For a Single User information
     public static User viewSingle(String username)
    {
        String hql = "from User where username='"+username+"'";
        session = HibernateUtil.getSessionFactory().openSession();
        Query query = session.createQuery(hql);
        List<User> users = query.list();
        session.close();
        User obj=null;
        if(!users.isEmpty())
        obj = users.get(0);

        return obj;
    }
     
}
